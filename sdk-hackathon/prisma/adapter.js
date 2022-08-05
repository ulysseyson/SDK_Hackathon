export function PrismaAdapter(p) {
  return {
    createUser: data => {
      for (const key in data) {
        if (data[key]) {
          console.log('Found: ', key, data[key]);
        }
      }
      delete data.image;
      data.id = data.name;
      const newData = { id: data.name, ...data };
      console.log(newData);
      p.user.create({ data: newData });
    },
    getUser: id => p.user.findUnique({ where: { id } }),
    getUserByEmail: email => p.user.findUnique({ where: { email } }),
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return account?.user ?? null;
    },
    updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),
    deleteUser: id => p.user.delete({ where: { id } }),
    linkAccount: data => p.account.create({ data }),
    unlinkAccount: provider_providerAccountId =>
      p.account.delete({ where: { provider_providerAccountId } }),
    async getSessionAndUser(sessionToken) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
    createSession: data => p.session.create({ data }),
    updateSession: data =>
      p.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: sessionToken =>
      p.session.delete({ where: { sessionToken } }),
    async createVerificationToken(data) {
      // @ts-ignore
      const { id: _, ...verificationToken } = await p.verificationToken.create({
        data,
      });
      return verificationToken;
    },
    async useVerificationToken(identifier_token) {
      try {
        // @ts-ignore
        const { id: _, ...verificationToken } =
          await p.verificationToken.delete({ where: { identifier_token } });
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if (error.code === 'P2025') return null;
        throw error;
      }
    },
  };
}
