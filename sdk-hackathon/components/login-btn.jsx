import { useSession, signIn, signOut } from 'next-auth/react';
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className='ui' >
        <div className='UserName'>{session.user.name}</div>
        <div className='signout'><button onClick={() => signOut()}>Sign out</button></div>
        <style jsx>{`
          .ui{
            display:flex;
            flex-direction : column;
          }
          .UserName {
            display: flex;
            padding-top : 20px;
            padding-right : 20px;
            font: normal normal bold 20px/18px Noto Sans KR;
            justify-content : flex-end;
          }
          .signout {
            display: flex;
            padding-right : 20px;
            padding-top : 20px;
            justify-content : flex-end;
            font: normal normal bold 14px/12px Noto Sans KR;
            align-items : flex-end;
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className='ui'>
      <div className='ment'>Not signed in</div>
      <div className='signin'><button onClick={() => signIn()}>Sign in</button></div>
      <style jsx global>{`
        .container {
          display : flex;
          justify-content : center;
          align-items : center;
          heigth : 100%;
        }
        .ment {
          display: flex;
          padding-top : 20px;
          padding-right : 20px;
          font: normal normal bold 20px/18px Noto Sans KR;
          justify-content : flex-end;
        }
        .signin {
          display: flex;
          padding-right : 20px;
          padding-top : 20px;
          justify-content : flex-end;
          font: normal normal bold 14px/12px Noto Sans KR;
          align-items : flex-end;
        }
      `}</style>
    </div>
  );
}
