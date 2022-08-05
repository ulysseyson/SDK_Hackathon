// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
    const { method } = request;
    if (method === "GET") {
      return response.status(200).json({
        checkID : true,
        checkPW : true
      });
    }
}
