import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { PATHS } from "../../router";
import { useAuth } from "../../context/auth-context";
import { useModalContext } from "../../context/modal-context";
import { api } from "../../api";
import { toast } from "react-toastify";
interface Props {
    toggleIsLeftSidebarActive: () => void;
    toggleIsRightSidebarActive: () => void;
}

const Navbar = ({
    toggleIsLeftSidebarActive,
    toggleIsRightSidebarActive,
}: Props) => {
    const { isAutheticated, username } = useAuth();
    const { setOpenModal } = useModalContext();
    const openModal = () => {
        setOpenModal(true);
    };
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(PATHS.app.search + (searchTerm ? "/" + searchTerm : ""));
    };
    return (
        <nav className="bg-white py-6 border-b">
            <div className="flex items-center px-12">
                <div className="mr-8 flex items-center">
                    <div className="hidden xl:block text-xl text-blue-500 font-bold">
                        All Drive
                    </div>
                    {/* toggle left sidebar button */}
                    <button
                        className="xl:hidden"
                        onClick={toggleIsLeftSidebarActive}
                    >
                        <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="14"
                                width="22"
                                height="4"
                                rx="2"
                                fill="#017BFF"
                            />
                            <rect
                                y="7"
                                width="22"
                                height="4"
                                rx="2"
                                fill="#017BFF"
                            />
                            <rect width="16" height="4" rx="2" fill="#017BFF" />
                        </svg>
                    </button>
                </div>
                <div className="ml-auto">
                    <div className="flex items-center gap-4 sm:gap-12">
                        {/* search input & upload, and create buttons */}
                        <div className="hidden sm:flex items-center gap-4">
                            <form
                                className="hidden lg:block"
                                onSubmit={onSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder="Type to seach..."
                                    className="bg-gray-100 px-4 py-2 rounded text-sm w-96"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </form>
                            <button
                                className="btn btn-sm btn-primary px-8"
                                onClick={openModal}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.22222 10.8889H7.77778V7.77778H10.8889V6.22222H7.77778V3.11111H6.22222V6.22222H3.11111V7.77778H6.22222V10.8889ZM1.55556 14C1.12778 14 0.761445 13.8476 0.456557 13.5427C0.151668 13.2378 -0.000517198 12.8717 1.32051e-06 12.4444V1.55556C1.32051e-06 1.12778 0.152446 0.761445 0.457335 0.456557C0.762223 0.151668 1.1283 -0.000517198 1.55556 1.32051e-06H12.4444C12.8722 1.32051e-06 13.2386 0.152446 13.5434 0.457335C13.8483 0.762223 14.0005 1.1283 14 1.55556V12.4444C14 12.8722 13.8476 13.2386 13.5427 13.5434C13.2378 13.8483 12.8717 14.0005 12.4444 14H1.55556ZM1.55556 12.4444H12.4444V1.55556H1.55556V12.4444Z"
                                        fill="white"
                                    />
                                </svg>
                                Upload
                            </button>
                            {/* probably create folder */}
                            <Link
                                className="btn btn-sm btn-secondary px-8"
                                to="/create"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z"
                                        fill="#515151"
                                    />
                                </svg>
                                Create
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-8">
                            <button>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 17.3636V8.27273C3 6.34388 3.84285 4.49403 5.34315 3.13013C6.84344 1.76623 8.87827 1 11 1C13.1217 1 15.1566 1.76623 16.6569 3.13013C18.1571 4.49403 19 6.34388 19 8.27273V17.3636M0 17.3636H22M14 17.3636V18.2727C14 18.996 13.6839 19.6897 13.1213 20.2012C12.5587 20.7127 11.7956 21 11 21C10.2044 21 9.44129 20.7127 8.87868 20.2012C8.31607 19.6897 8 18.996 8 18.2727V17.3636"
                                        stroke="#A9A9A9"
                                        stroke-width="2"
                                    />
                                </svg>
                            </button>
                            <button>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.47369 0C5.06118 0 5.64292 0.115715 6.18569 0.340539C6.72846 0.565363 7.22164 0.894892 7.63706 1.31031C8.05248 1.72573 8.38201 2.21891 8.60683 2.76168C8.83165 3.30445 8.94737 3.88619 8.94737 4.47368V8.94737H4.47369C3.28719 8.94737 2.14929 8.47604 1.31031 7.63706C0.471335 6.79808 1.91283e-06 5.66018 1.91283e-06 4.47368C1.91283e-06 3.28719 0.471335 2.14929 1.31031 1.31031C2.14929 0.471333 3.28719 0 4.47369 0ZM6.84211 6.8421V4.47368C6.84211 4.00525 6.7032 3.54734 6.44296 3.15786C6.18271 2.76838 5.81281 2.46481 5.38004 2.28555C4.94727 2.10629 4.47106 2.05939 4.01163 2.15077C3.5522 2.24216 3.13019 2.46773 2.79896 2.79896C2.46773 3.13019 2.24216 3.5522 2.15077 4.01163C2.05939 4.47106 2.10629 4.94727 2.28555 5.38004C2.46481 5.81281 2.76838 6.18271 3.15786 6.44295C3.54735 6.7032 4.00526 6.8421 4.47369 6.8421H6.84211ZM4.47369 11.0526H8.94737V15.5263C8.94737 16.4111 8.68499 17.2761 8.19342 18.0118C7.70184 18.7475 7.00315 19.3209 6.18569 19.6595C5.36823 19.9981 4.46872 20.0867 3.60091 19.914C2.7331 19.7414 1.93597 19.3153 1.31031 18.6897C0.684658 18.064 0.258581 17.2669 0.0859626 16.3991C-0.0866555 15.5313 0.00193837 14.6318 0.340541 13.8143C0.679143 12.9969 1.25255 12.2982 1.98824 11.8066C2.72393 11.315 3.58887 11.0526 4.47369 11.0526ZM4.47369 13.1579C4.00526 13.1579 3.54735 13.2968 3.15786 13.557C2.76838 13.8173 2.46481 14.1872 2.28555 14.62C2.10629 15.0527 2.05939 15.5289 2.15077 15.9884C2.24216 16.4478 2.46773 16.8698 2.79896 17.201C3.13019 17.5323 3.5522 17.7578 4.01163 17.8492C4.47106 17.9406 4.94727 17.8937 5.38004 17.7145C5.81281 17.5352 6.18271 17.2316 6.44296 16.8421C6.7032 16.4527 6.84211 15.9947 6.84211 15.5263V13.1579H4.47369ZM15.5263 0C16.7128 0 17.8507 0.471333 18.6897 1.31031C19.5287 2.14929 20 3.28719 20 4.47368C20 5.66018 19.5287 6.79808 18.6897 7.63706C17.8507 8.47604 16.7128 8.94737 15.5263 8.94737H11.0526V4.47368C11.0526 3.28719 11.524 2.14929 12.3629 1.31031C13.2019 0.471333 14.3398 0 15.5263 0ZM15.5263 6.8421C15.9947 6.8421 16.4527 6.7032 16.8421 6.44295C17.2316 6.18271 17.5352 5.81281 17.7145 5.38004C17.8937 4.94727 17.9406 4.47106 17.8492 4.01163C17.7578 3.5522 17.5323 3.13019 17.201 2.79896C16.8698 2.46773 16.4478 2.24216 15.9884 2.15077C15.5289 2.05939 15.0527 2.10629 14.62 2.28555C14.1872 2.46481 13.8173 2.76838 13.557 3.15786C13.2968 3.54734 13.1579 4.00525 13.1579 4.47368V6.8421H15.5263ZM11.0526 11.0526H15.5263C16.4111 11.0526 17.2761 11.315 18.0118 11.8066C18.7475 12.2982 19.3209 12.9969 19.6595 13.8143C19.9981 14.6318 20.0867 15.5313 19.914 16.3991C19.7414 17.2669 19.3153 18.064 18.6897 18.6897C18.064 19.3153 17.2669 19.7414 16.3991 19.914C15.5313 20.0867 14.6318 19.9981 13.8143 19.6595C12.9969 19.3209 12.2982 18.7475 11.8066 18.0118C11.315 17.2761 11.0526 16.4111 11.0526 15.5263V11.0526ZM13.1579 13.1579V15.5263C13.1579 15.9947 13.2968 16.4527 13.557 16.8421C13.8173 17.2316 14.1872 17.5352 14.62 17.7145C15.0527 17.8937 15.5289 17.9406 15.9884 17.8492C16.4478 17.7578 16.8698 17.5323 17.201 17.201C17.5323 16.8698 17.7578 16.4478 17.8492 15.9884C17.9406 15.5289 17.8937 15.0527 17.7145 14.62C17.5352 14.1872 17.2316 13.8173 16.8421 13.557C16.4527 13.2968 15.9947 13.1579 15.5263 13.1579H13.1579Z"
                                        fill="#A9A9A9"
                                    />
                                </svg>
                            </button>
                            {isAutheticated && (
                                <p className="capitalize">{username}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
