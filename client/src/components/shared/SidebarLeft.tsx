import React from "react";
import { Link } from "react-router-dom";

const styles = {
  link: "flex gap-6 items-center text-gray-500 hover:text-gray-800",
  linkActive: "!text-blue-500 !hover:text-blue-500",
};

const SidebarLeft = () => {
  return (
    <div className="bg-white border-r p-12 w-72 flex flex-col">
      <div className="flex flex-col gap-8">
        <Link to="/" className={styles.link + " " + styles.linkActive}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2 10L9.275 10.925C9.09167 11.1083 9 11.3417 9 11.625C9 11.9083 9.09167 12.1417 9.275 12.325C9.45833 12.5083 9.69167 12.6 9.975 12.6C10.2583 12.6 10.4917 12.5083 10.675 12.325L13.3 9.7C13.5 9.5 13.6 9.26667 13.6 9C13.6 8.73334 13.5 8.5 13.3 8.3L10.675 5.675C10.4917 5.49167 10.2583 5.4 9.975 5.4C9.69167 5.4 9.45833 5.49167 9.275 5.675C9.09167 5.85834 9 6.09167 9 6.375C9 6.65834 9.09167 6.89167 9.275 7.075L10.2 8H7C6.71667 8 6.479 8.096 6.287 8.288C6.095 8.48 5.99934 8.71734 6 9C6 9.28334 6.096 9.521 6.288 9.713C6.48 9.905 6.71734 10.0007 7 10H10.2ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H7.175C7.44167 1.69779e-06 7.696 0.0500018 7.938 0.150002C8.18 0.250002 8.39233 0.391668 8.575 0.575001L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM2 2V14H18V4H9.175L7.175 2H2Z"
              fill="#017BFF"
            />
          </svg>
          My Drive
        </Link>
        <Link to="/" className={styles.link}>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9.50018H11V8.50018C11 8.23497 10.8946 7.98061 10.7071 7.79308C10.5196 7.60554 10.2652 7.50018 10 7.50018C9.73478 7.50018 9.48043 7.60554 9.29289 7.79308C9.10536 7.98061 9 8.23497 9 8.50018V9.50018H8C7.73478 9.50018 7.48043 9.60554 7.29289 9.79308C7.10536 9.98061 7 10.235 7 10.5002C7 10.7654 7.10536 11.0198 7.29289 11.2073C7.48043 11.3948 7.73478 11.5002 8 11.5002H9V12.5002C9 12.7654 9.10536 13.0198 9.29289 13.2073C9.48043 13.3948 9.73478 13.5002 10 13.5002C10.2652 13.5002 10.5196 13.3948 10.7071 13.2073C10.8946 13.0198 11 12.7654 11 12.5002V11.5002H12C12.2652 11.5002 12.5196 11.3948 12.7071 11.2073C12.8946 11.0198 13 10.7654 13 10.5002C13 10.235 12.8946 9.98061 12.7071 9.79308C12.5196 9.60554 12.2652 9.50018 12 9.50018Z"
              fill="#C5C5C5"
            />
            <path
              d="M17.5 3.55019H10.5L7.87 0.370186C7.77695 0.255473 7.65964 0.162799 7.5265 0.0988242C7.39336 0.0348494 7.24771 0.00116314 7.1 0.000186355H2.5C1.84661 -0.00783506 1.21666 0.243381 0.748098 0.698826C0.279533 1.15427 0.0105328 1.77683 0 2.43019V14.5702C0.0105328 15.2235 0.279533 15.8461 0.748098 16.3015C1.21666 16.757 1.84661 17.0082 2.5 17.0002H17.5C18.1534 17.0082 18.7833 16.757 19.2519 16.3015C19.7205 15.8461 19.9895 15.2235 20 14.5702V5.98019C19.9895 5.32683 19.7205 4.70427 19.2519 4.24883C18.7833 3.79338 18.1534 3.54217 17.5 3.55019ZM18 14.5502C17.9962 14.6115 17.9802 14.6715 17.9529 14.7266C17.9255 14.7817 17.8874 14.8307 17.8408 14.8708C17.7942 14.9109 17.74 14.9412 17.6815 14.96C17.6229 14.9788 17.5612 14.9856 17.5 14.9802H2.5C2.43876 14.9856 2.37706 14.9788 2.31852 14.96C2.25998 14.9412 2.20581 14.9109 2.1592 14.8708C2.11259 14.8307 2.07448 14.7817 2.04714 14.7266C2.0198 14.6715 2.00377 14.6115 2 14.5502V2.43019C2.00377 2.36882 2.0198 2.30884 2.04714 2.25378C2.07448 2.19871 2.11259 2.14969 2.1592 2.1096C2.20581 2.06952 2.25998 2.03918 2.31852 2.02039C2.37706 2.00159 2.43876 1.99473 2.5 2.00019H6.63L9.23 5.18019C9.32305 5.2949 9.44036 5.38757 9.5735 5.45155C9.70664 5.51552 9.85229 5.54921 10 5.55019H17.5C17.5612 5.54473 17.6229 5.55159 17.6815 5.57039C17.74 5.58918 17.7942 5.61952 17.8408 5.6596C17.8874 5.69969 17.9255 5.74871 17.9529 5.80378C17.9802 5.85884 17.9962 5.91882 18 5.98019V14.5502Z"
              fill="#C5C5C5"
            />
          </svg>
          Add Drive
        </Link>
        <Link to="/" className={styles.link}>
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14H19C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H15.07C14.7406 3.9983 14.4167 3.91525 14.1271 3.75824C13.8375 3.60123 13.5912 3.37512 13.41 3.1L12.59 1.9C12.4088 1.62488 12.1625 1.39877 11.8729 1.24176C11.5833 1.08475 11.2594 1.0017 10.93 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V12C5 13.1 5.9 14 7 14Z"
              stroke="#C5C5C5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 5V16C1 17.1 1.9 18 3 18H17"
              stroke="#C5C5C5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          My Folders
        </Link>
        <Link to="/" className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1111 9.55556L13.8889 12.3333C14.0926 12.537 14.1944 12.7963 14.1944 13.1111C14.1944 13.4259 14.0926 13.6852 13.8889 13.8889C13.6852 14.0926 13.4259 14.1944 13.1111 14.1944C12.7963 14.1944 12.537 14.0926 12.3333 13.8889L9.22223 10.7778C9.11111 10.6667 9.02778 10.5419 8.97223 10.4033C8.91667 10.2648 8.88889 10.1211 8.88889 9.97222V5.55556C8.88889 5.24074 8.99556 4.97667 9.20889 4.76333C9.42222 4.55 9.68593 4.4437 10 4.44444C10.3148 4.44444 10.5789 4.55111 10.7922 4.76444C11.0056 4.97778 11.1119 5.24148 11.1111 5.55556V9.55556ZM10 20C7.75926 20 5.75 19.3378 3.97223 18.0133C2.19445 16.6889 1 14.9622 0.388893 12.8333C0.2963 12.5 0.328893 12.1852 0.48667 11.8889C0.644448 11.5926 0.889633 11.4074 1.22223 11.3333C1.53704 11.2593 1.81963 11.3289 2.07 11.5422C2.32037 11.7556 2.49148 12.0193 2.58334 12.3333C3.06482 13.963 3.99556 15.2778 5.37556 16.2778C6.75556 17.2778 8.29704 17.7778 10 17.7778C12.1667 17.7778 14.0048 17.023 15.5144 15.5133C17.0241 14.0037 17.7785 12.1659 17.7778 10C17.7778 7.83333 17.023 5.99518 15.5133 4.48556C14.0037 2.97593 12.1659 2.22148 10 2.22222C8.72223 2.22222 7.52778 2.51852 6.41667 3.11111C5.30556 3.7037 4.37037 4.51852 3.61111 5.55556H5.55556C5.87037 5.55556 6.13445 5.66222 6.34778 5.87556C6.56111 6.08889 6.66741 6.35259 6.66667 6.66667C6.66667 6.98148 6.56 7.24556 6.34667 7.45889C6.13334 7.67222 5.86963 7.77852 5.55556 7.77778H1.11111C0.7963 7.77778 0.532226 7.67111 0.318893 7.45778C0.105559 7.24444 -0.000736896 6.98074 3.84468e-06 6.66667V2.22222C3.84468e-06 1.90741 0.106671 1.64333 0.320004 1.43C0.533337 1.21667 0.797041 1.11037 1.11111 1.11111C1.42593 1.11111 1.69 1.21778 1.90334 1.43111C2.11667 1.64444 2.22297 1.90815 2.22223 2.22222V3.72222C3.16667 2.53704 4.31963 1.62037 5.68111 0.972222C7.04259 0.324074 8.48223 0 10 0C11.3889 0 12.69 0.264074 13.9033 0.792222C15.1167 1.32037 16.1722 2.03296 17.07 2.93C17.9678 3.82852 18.6807 4.88407 19.2089 6.09667C19.737 7.30926 20.0007 8.61037 20 10C20 11.3889 19.7359 12.69 19.2078 13.9033C18.6796 15.1167 17.967 16.1722 17.07 17.07C16.1715 17.9678 15.1159 18.6807 13.9033 19.2089C12.6907 19.737 11.3896 20.0007 10 20Z"
              fill="#C5C5C5"
            />
          </svg>
          History
        </Link>
        <Link to="/" className={styles.link}>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.8125 16.5521C6.59028 16.5521 6.42361 16.4514 6.3125 16.25C6.27083 16.1736 6.19792 16.0417 6.09375 15.8542C5.98958 15.6667 5.88194 15.4722 5.77083 15.2708C5.65972 15.0694 5.55903 14.8785 5.46875 14.6979C5.37847 14.5174 5.33333 14.3958 5.33333 14.3333C5.33333 14.2222 5.35764 14.1042 5.40625 13.9792C5.45486 13.8542 5.51736 13.7292 5.59375 13.6042C5.67014 13.4792 5.74306 13.3611 5.8125 13.25C5.88194 13.1389 5.94444 13.0417 6 12.9583L5.33333 12.4271H7.38542L7.875 14.4479L7.07292 13.8125L6.5 14.9688H8.40625V16.5521H6.8125ZM9.21875 9.84375L8.34375 11.5625L7.02083 10.8958L7.64583 9.65625C7.74306 9.44792 7.90972 9.34375 8.14583 9.34375L10.4479 9.33333C10.6701 9.33333 10.8368 9.4375 10.9479 9.64583L11.5104 10.6979L12.1146 10.2396L11.8021 12.3958L9.53125 12.1875L10.1771 11.7083L9.21875 9.84375ZM10.4896 17.3333L9.19792 15.6042L10.4896 14.0208V15.0938H12.1875L11.4896 13.8125L12.7604 13.0625C12.7882 13.125 12.8333 13.2118 12.8958 13.3229C12.9583 13.434 13.0243 13.5556 13.0938 13.6875C13.1632 13.8194 13.2188 13.941 13.2604 14.0521C13.3021 14.1632 13.3264 14.2569 13.3333 14.3333C13.3333 14.4167 13.3125 14.5 13.2708 14.5833L12.3854 16.3333C12.3368 16.4306 12.2674 16.5035 12.1771 16.5521C12.0868 16.6007 11.9896 16.6285 11.8854 16.6354H10.4896V17.3333ZM16.7292 6.66667H18.1042L15.2812 19.2812C14.3785 19.9549 13.4479 20.4653 12.4896 20.8125C11.5312 21.1597 10.4826 21.3333 9.34375 21.3333C8.21875 21.3333 7.17361 21.1597 6.20833 20.8125C5.24306 20.4653 4.3125 19.9549 3.41667 19.2812L0.09375 4.59375L0.03125 4.30208C0.0104167 4.20486 0 4.10417 0 4C0 3.59722 0.100694 3.23264 0.302083 2.90625C0.503472 2.57986 0.774306 2.28472 1.11458 2.02083C1.45486 1.75694 1.83333 1.53125 2.25 1.34375C2.66667 1.15625 3.09375 0.986111 3.53125 0.833333C3.96875 0.680556 4.38889 0.565972 4.79167 0.489583C5.19444 0.413194 5.55208 0.34375 5.86458 0.28125C7.01042 0.09375 8.16667 0 9.33333 0C9.6875 0 10.0382 0.00694444 10.3854 0.0208333C10.7326 0.0347222 11.0868 0.0625 11.4479 0.104167C10.9896 0.243056 10.5486 0.413194 10.125 0.614583C9.70139 0.815972 9.29167 1.05903 8.89583 1.34375C8.5625 1.35069 8.19444 1.36806 7.79167 1.39583C7.38889 1.42361 6.97222 1.46528 6.54167 1.52083C6.11111 1.57639 5.67361 1.64931 5.22917 1.73958C4.78472 1.82986 4.35764 1.94097 3.94792 2.07292C3.53819 2.20486 3.15278 2.35764 2.79167 2.53125C2.43056 2.70486 2.11806 2.90625 1.85417 3.13542C1.72917 3.24653 1.61111 3.375 1.5 3.52083C1.38889 3.66667 1.33333 3.82639 1.33333 4C1.33333 4.10417 1.35417 4.20139 1.39583 4.29167C1.4375 4.38194 1.49306 4.47222 1.5625 4.5625C1.63194 4.65278 1.70486 4.73264 1.78125 4.80208C1.85764 4.87153 1.9375 4.9375 2.02083 5C2.3125 5.22222 2.64583 5.41667 3.02083 5.58333C3.39583 5.75 3.79861 5.89236 4.22917 6.01042C4.65972 6.12847 5.09722 6.23264 5.54167 6.32292C5.98611 6.41319 6.43403 6.47917 6.88542 6.52083C7.33681 6.5625 7.76736 6.60069 8.17708 6.63542C8.58681 6.67014 8.97222 6.68056 9.33333 6.66667H9.5625C9.63889 6.66667 9.71528 6.66319 9.79167 6.65625L9.80208 6.66667H16.3854C15.8715 6.90972 15.3229 7.11458 14.7396 7.28125C14.1562 7.44792 13.5556 7.58681 12.9375 7.69792C12.3194 7.80903 11.7049 7.88542 11.0938 7.92708C10.4826 7.96875 9.89583 7.99306 9.33333 8C8.75 8 8.13194 7.97569 7.47917 7.92708C6.82639 7.87847 6.17361 7.79167 5.52083 7.66667C4.86806 7.54167 4.22917 7.38542 3.60417 7.19792C2.97917 7.01042 2.40972 6.77083 1.89583 6.47917L4.60417 18.5C5.29861 18.9861 6.05208 19.3507 6.86458 19.5938C7.67708 19.8368 8.50694 19.9618 9.35417 19.9688C10.1944 19.9688 11.0174 19.8472 11.8229 19.6042C12.6285 19.3611 13.3819 18.9931 14.0833 18.5L16.7292 6.66667ZM20 0V5.33333H14.6667V4H17.7083C17.1806 3.58333 16.6007 3.26736 15.9688 3.05208C15.3368 2.83681 14.684 2.72917 14.0104 2.72917C13.2188 2.72917 12.4618 2.87847 11.7396 3.17708C11.0174 3.47569 10.3715 3.90625 9.80208 4.46875L8.86458 3.53125C9.55208 2.84375 10.3368 2.31597 11.2188 1.94792C12.1007 1.57986 13.0312 1.39583 14.0104 1.39583C14.8576 1.39583 15.6806 1.53819 16.4792 1.82292C17.2778 2.10764 18.0069 2.52083 18.6667 3.0625V0H20Z"
              fill="#C5C5C5"
            />
          </svg>
          Recycle Bin
        </Link>
        <Link to="/" className={styles.link}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9C13.55 9 14.021 8.804 14.413 8.412C14.805 8.02 15.0007 7.54934 15 7C15 6.45 14.804 5.979 14.412 5.587C14.02 5.195 13.5493 4.99934 13 5C12.45 5 11.979 5.196 11.587 5.588C11.195 5.98 10.9993 6.45067 11 7C11 7.55 11.196 8.021 11.588 8.413C11.98 8.805 12.4507 9.00067 13 9ZM9 13H17V12.45C17 11.7 16.6333 11.104 15.9 10.662C15.1667 10.22 14.2 9.99934 13 10C11.8 10 10.8333 10.221 10.1 10.663C9.36667 11.105 9 11.7007 9 12.45V13ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM2 2V14H18V4H9.175L7.175 2H2Z"
              fill="#C5C5C5"
            />
          </svg>
          Shared Files
        </Link>
      </div>
      <div className="mt-auto">
        <Link to="/" className={styles.link}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.71408 8.1125C7.59933 7.98009 7.54196 7.82996 7.54196 7.66211C7.54196 7.49426 7.59933 7.35411 7.71408 7.24167L8.87197 6.11111H4.38122C4.20389 6.11111 4.05513 6.05244 3.93496 5.93511C3.81479 5.81778 3.75491 5.67274 3.75533 5.5C3.75533 5.32685 3.81542 5.18161 3.93559 5.06428C4.05576 4.94694 4.2043 4.88848 4.38122 4.88889H8.87197L7.71408 3.75833C7.5889 3.63611 7.52631 3.49087 7.52631 3.32261C7.52631 3.15435 7.5889 3.00932 7.71408 2.8875C7.82882 2.76528 7.97236 2.70417 8.14469 2.70417C8.31702 2.70417 8.46034 2.76019 8.57467 2.87222L10.8279 5.07222C10.8905 5.13333 10.9349 5.19954 10.9612 5.27083C10.9875 5.34213 11.0004 5.41852 11 5.5C11 5.58148 10.9871 5.65787 10.9612 5.72917C10.9353 5.80046 10.8909 5.86667 10.8279 5.92778L8.57467 8.12778C8.43906 8.26018 8.29031 8.31885 8.12841 8.30378C7.96652 8.2887 7.8284 8.22494 7.71408 8.1125ZM1.25178 11C0.907539 11 0.612746 10.8802 0.367397 10.6407C0.122049 10.4011 -0.000416196 10.1135 1.06263e-06 9.77778V1.22222C1.06263e-06 0.886112 0.122675 0.598279 0.368023 0.358723C0.613372 0.119168 0.907956 -0.00040637 1.25178 1.03754e-06H5.00711C5.18444 1.03754e-06 5.3332 0.0586678 5.45337 0.176001C5.57354 0.293334 5.63341 0.438371 5.633 0.611112C5.633 0.78426 5.57291 0.929501 5.45274 1.04683C5.33257 1.16417 5.18403 1.22263 5.00711 1.22222H1.25178V9.77778H5.00711C5.18444 9.77778 5.3332 9.83644 5.45337 9.95378C5.57354 10.0711 5.63341 10.2161 5.633 10.3889C5.633 10.562 5.57291 10.7073 5.45274 10.8246C5.33257 10.9419 5.18403 11.0004 5.00711 11H1.25178Z"
              fill="#C5C5C5"
            />
          </svg>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SidebarLeft;
