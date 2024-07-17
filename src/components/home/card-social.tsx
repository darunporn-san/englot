import { ICardSocial } from "@/app/page";
import Image from "next/image";

const CardSocial = ({ detail }: { detail: ICardSocial }) => {
  const { name, image,birthday, social_media } = detail;

  const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
  };
  return (
    <>
      <div className="card mx-5 my-3 md:my-0">
        <img
          className="image max-h-60 m-auto"
          alt=""
          src={`/images/${image}.png`}
        />
        <p className="text-white mt-2 text-xl">{name}</p>
        <p className="text-white mb-4 mt-0 text-sm">อายุ {calculateAge(birthday)} ปี</p>
        <div className="icons">
          <a
            className="instagram bg-gray-700 hover:bg-instagram-gradient transition transform duration-500 hover:-translate-y-1 " 
            href={`https://www.instagram.com/${social_media.instagram}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 25"
              height="25"
              width="24"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
              ></path>
            </svg>
          </a>
          <a
            className="x bg-gray-700 hover:bg-black  hover:border-white transition transform duration-500 hover:-translate-y-1 " 
            href={`https://twitter.com/${social_media.twitter}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            className="facebook bg-gray-700  hover:bg-[#1877F2] transition transform duration-500 hover:-translate-y-1 " 
            href={`https://web.facebook.com/${social_media.facebook}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              height="24"
              width="24"
            >
              <path
                d="M15.5,30h-11C3.122,30,2,28.879,2,27.5V8c0-0.276,0.224-0.5,0.5-0.5S3,7.724,3,8v19.5    C3,28.327,3.673,29,4.5,29h11c0.276,0,0.5,0.224,0.5,0.5S15.776,30,15.5,30z"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1"
                stroke="currentColor"
              />
              <path
                d="M27.5,30h-6c-0.276,0-0.5-0.224-0.5-0.5v-10c0-0.276,0.224-0.5,0.5-0.5h3.059l0.375-3H21.5    c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.827,0.673-1.5,1.5-1.5H25V7h-3.5C19.57,7,18,8.57,18,10.5v5c0,0.276-0.224,0.5-0.5,0.5H14v3    h3.5c0.276,0,0.5,0.224,0.5,0.5v10c0,0.276-0.224,0.5-0.5,0.5S17,29.776,17,29.5V20h-3.5c-0.276,0-0.5-0.224-0.5-0.5v-4    c0-0.276,0.224-0.5,0.5-0.5H17v-4.5C17,8.019,19.019,6,21.5,6h4C25.776,6,26,6.224,26,6.5v4c0,0.276-0.224,0.5-0.5,0.5h-3    c-0.276,0-0.5,0.225-0.5,0.5V15h3.5c0.144,0,0.28,0.062,0.375,0.169c0.095,0.107,0.139,0.251,0.121,0.394l-0.5,4    C25.465,19.813,25.252,20,25,20h-3v9h5.5c0.827,0,1.5-0.673,1.5-1.5v-23C29,3.673,28.327,3,27.5,3h-23C3.673,3,3,3.673,3,4.5v1    C3,5.776,2.776,6,2.5,6S2,5.776,2,5.5v-1C2,3.121,3.122,2,4.5,2h23C28.878,2,30,3.121,30,4.5v23C30,28.879,28.878,30,27.5,30z"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1"
                stroke="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
export default CardSocial;
