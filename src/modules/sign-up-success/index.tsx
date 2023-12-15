import Link from "next/link";

type SignUpSuccessProps = {
  avatarLink: string;
};

const SignUpSuccess = ({ avatarLink }: SignUpSuccessProps) => {
  return (
    <div className="w-1/2 flex flex-col  p-4 shadow-lg rounded-md justify-center text-center">
      <div className="m-auto">
        <img
          src={avatarLink}
          alt=""
          className="rounded-full h-auto w-[220px] border-solid border-[#fc8eac] border"
        />
      </div>
      <div className="m-auto -mt-[135px]">
        <h3 className="font-semibold text-2xl">Welcome Onboard, Nabil</h3>
        <small className="font-light text-sm mb-2">
          Hope you will have a great time with us
        </small>
        <p>
          Click here to{" "}
          <Link
            href="#"
            className="text-cyan-600 hover:text-cyan-800 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpSuccess;
