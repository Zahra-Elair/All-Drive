import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { api } from "../../api";
import { convertBytesToGiga, getPercentage } from "../../libs/helpers/convert";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
    button: "p-6 border rounded flex justify-between items-center space-x-10 text-sm mt-6 w-full hover:bg-gray-50 duration-200",
};

interface Props {
    isOpen: boolean;
}

const SidebarRight = ({ isOpen }: Props) => {
    const [token, setToken] = useState(() =>
        localStorage.getItem("google-drive")
    );
    const [usedStorage, setUsedStorage] = useState(0);
    const [limitStorage, setLimitStorage] = useState(0);
    function getStorageData() {
        api.post(
            "/user-drive/about",
            { token },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then((res) => {
            const { limit, usage } = res.data.data;
            setUsedStorage(usage);
            setLimitStorage(limit);
        });
    }
    useEffect(() => {
        getStorageData();
    }, []);
    return (
        <div
            className={`bg-white border-l py-10 px-8 flex-col items-center ${
                isOpen ? "flex" : "hidden"
            } lg:!flex`}
        >
            <div className="text-xl font-medium">My Storage</div>
            <div className="relative flex justify-center">
                <Doughnut
                    data={{
                        labels: ["Used", "Free"],
                        datasets: [
                            {
                                data: [usedStorage, limitStorage - usedStorage],
                                backgroundColor: ["#017BFF", "#F2F2F2"],
                                circumference: 180,
                                rotation: 270,
                            },
                        ],
                    }}
                />
                <div className="absolute left-1/2 bottom-16 -translate-x-1/2 text-2xl font-semibold">
                    {`${convertBytesToGiga(usedStorage)} GB`}
                </div>
                <div className="absolute left-1/2 bottom-4 -translate-x-1/2 text-sm font-medium text-gray-400 w-full text-center">
                    {`${getPercentage(
                        limitStorage - usedStorage,
                        limitStorage
                    )}% Free Storage Left to Use`}
                </div>
            </div>
            <button className={styles.button}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.4 0C1.07451 0 0 1.07452 0 2.4V17.6C0 18.9255 1.07451 20 2.4 20H17.6C18.9255 20 20 18.9255 20 17.6V2.4C20 1.07452 18.9255 0 17.6 0H2.4ZM12.97 6.233C12.8673 6.211 12.7537 6.2 12.629 6.2H7.404C7.28667 6.2 7.173 6.211 7.063 6.233C6.953 6.255 6.865 6.31733 6.799 6.42C6.733 6.51533 6.7 6.68033 6.7 6.915C6.7 7.14967 6.733 7.31833 6.799 7.421C6.865 7.51633 6.953 7.57867 7.063 7.608C7.173 7.63 7.28667 7.641 7.404 7.641H9.197V13.075C9.197 13.2143 9.20801 13.35 9.23001 13.482C9.252 13.6067 9.32168 13.7093 9.43899 13.79C9.55632 13.8633 9.747 13.9 10.011 13.9C10.2823 13.9 10.473 13.8633 10.583 13.79C10.7003 13.7093 10.77 13.6067 10.792 13.482C10.8213 13.3573 10.836 13.2253 10.836 13.086V7.641H12.607C12.7317 7.641 12.849 7.63 12.959 7.608C13.069 7.586 13.157 7.52367 13.223 7.421C13.2963 7.31833 13.333 7.15333 13.333 6.926C13.333 6.684 13.2963 6.51533 13.223 6.42C13.157 6.31733 13.0727 6.255 12.97 6.233Z"
                        fill="#6F8BB5"
                    />
                </svg>
                <span>Documents</span>
                <span className="text-gray-400">5 Gb</span>
            </button>
            <button className={styles.button}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.4 0C1.07452 0 0 1.07452 0 2.4V17.6C0 18.9255 1.07452 20 2.4 20H17.6C18.9255 20 20 18.9255 20 17.6V2.4C20 1.07452 18.9255 0 17.6 0H2.4ZM7.34253 12.0511C7.73202 12.5708 8.12243 13.0916 8.43838 13.0916C9.03214 13.0916 9.68861 12.1148 10.3596 11.1165C11.2734 9.75667 12.2142 8.35686 13.06 9.33088C13.5918 9.94364 14.1399 11.2847 14.6227 12.466C14.7909 12.8774 14.9511 13.2695 15.1 13.6047V14.08C15.1 14.6441 14.6441 15.1 14.08 15.1H5.92C5.64948 15.1 5.39004 14.9925 5.19875 14.8012C5.00746 14.61 4.9 14.3505 4.9 14.08V13.7444C5.09327 13.3111 5.29016 12.8234 5.46849 12.3817C5.64404 11.9469 5.8016 11.5566 5.92 11.3066C6.25485 10.6 6.79778 11.3244 7.34253 12.0511ZM7.96 6.43C7.96 7.27558 7.27558 7.96 6.43 7.96C5.58442 7.96 4.9 7.27558 4.9 6.43C4.9 5.58442 5.58442 4.9 6.43 4.9C7.27558 4.9 7.96 5.58442 7.96 6.43Z"
                        fill="#FF3093"
                    />
                </svg>

                <span>Pictures</span>
                <span className="text-gray-400">49 Gb</span>
            </button>
            <button className={styles.button}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.4 0C1.07452 0 0 1.07452 0 2.4V17.6C0 18.9255 1.07452 20 2.4 20H17.6C18.9255 20 20 18.9255 20 17.6V2.4C20 1.07452 18.9255 0 17.6 0H2.4ZM5.99622 14.9005C6.19471 15 6.29396 15 6.49245 15C6.69094 15 6.79018 15 6.98867 14.9005L13.9358 10.9204C14.2336 10.7214 14.432 10.4229 14.432 10.0249C14.432 9.62687 14.2336 9.32836 13.9358 9.12935L6.98867 5.14925C6.69094 4.95025 6.29396 4.95025 5.99622 5.14925C5.69849 5.34826 5.5 5.64677 5.5 6.04478V14.005C5.5 14.403 5.69849 14.7015 5.99622 14.9005ZM11.4547 10.0249L7.4849 12.3134V7.73632L11.4547 10.0249Z"
                        fill="#844FDA"
                    />
                </svg>

                <span>Videos</span>
                <span className="text-gray-400">112 Gb</span>
            </button>
            <button className={styles.button}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.4 0C1.07452 0 0 1.07452 0 2.4V17.6C0 18.9255 1.07452 20 2.4 20H17.6C18.9255 20 20 18.9255 20 17.6V2.4C20 1.07452 18.9255 0 17.6 0H2.4ZM14.0971 5.00762C14.3 4.97623 14.5071 5.04318 14.6557 5.18336C14.8042 5.32563 14.8795 5.52648 14.8649 5.72943L14.254 12.1881L14.2527 12.2055C14.2469 12.2852 14.2412 12.3632 14.2373 12.4412C14.1849 13.32 13.4569 14.0167 12.5657 14.0167C11.6285 14.0167 10.8732 13.2488 10.892 12.3073C10.9109 11.4035 11.6577 10.6712 12.5615 10.6691C12.7352 10.6691 12.9004 10.6942 13.0573 10.7424L13.3502 7.55593L9.02174 8.19196L8.56149 13.1756C8.55312 13.2572 8.54894 13.3367 8.54475 13.4183C8.49663 14.2991 7.7665 15 6.87319 15C5.92549 15 5.1598 14.2112 5.20164 13.253C5.23929 12.3868 5.94432 11.6859 6.81043 11.6546C6.99872 11.6483 7.18073 11.6734 7.35228 11.7236L7.83763 6.44496C7.86483 6.13741 8.10123 5.88844 8.40668 5.8445L14.0971 5.00762Z"
                        fill="#00BECA"
                    />
                </svg>

                <span>Audio</span>
                <span className="text-gray-400">71 Gb</span>
            </button>
            <button className={styles.button}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.4 0C1.07451 0 0 1.07452 0 2.4V17.6C0 18.9255 1.07451 20 2.4 20H17.6C18.9255 20 20 18.9255 20 17.6V2.4C20 1.07452 18.9255 0 17.6 0H2.4ZM9.48237 11.38C9.59238 11.446 9.77205 11.479 10.0214 11.479C10.2707 11.479 10.4504 11.4497 10.5604 11.391C10.6704 11.3323 10.74 11.2517 10.7694 11.149C10.7987 11.0463 10.8134 10.9363 10.8134 10.819V10.499C10.8812 10.4774 10.9618 10.4484 11.0554 10.412C11.1874 10.3533 11.3304 10.2763 11.4844 10.181C11.6457 10.0783 11.796 9.95 11.9354 9.796C12.0747 9.63467 12.1884 9.44033 12.2764 9.213C12.3644 8.98567 12.4084 8.72167 12.4084 8.421C12.4084 7.97367 12.3021 7.57767 12.0894 7.233C11.884 6.88834 11.598 6.61334 11.2314 6.408C10.8647 6.20267 10.443 6.1 9.96638 6.1C9.62905 6.1 9.33569 6.144 9.08638 6.232C8.83704 6.32 8.62437 6.43367 8.44836 6.573C8.27236 6.705 8.12937 6.84434 8.01939 6.991C7.9167 7.13033 7.83604 7.26233 7.77737 7.387C7.7187 7.50433 7.68203 7.59233 7.66738 7.651C7.61604 7.827 7.59404 7.97 7.60137 8.08C7.60872 8.19 7.66003 8.28533 7.75537 8.366C7.85071 8.43933 8.00105 8.51633 8.20637 8.597C8.39705 8.67033 8.55105 8.69967 8.66838 8.685C8.78569 8.663 8.88105 8.60067 8.95437 8.498C9.03503 8.39533 9.10471 8.256 9.16338 8.08C9.20005 7.99933 9.25137 7.926 9.31738 7.86C9.38337 7.794 9.47139 7.739 9.58137 7.695C9.69138 7.651 9.8197 7.629 9.96638 7.629C10.2817 7.629 10.5164 7.69867 10.6704 7.838C10.8244 7.97 10.9014 8.17533 10.9014 8.454C10.9014 8.64467 10.861 8.795 10.7804 8.905C10.6997 9.015 10.597 9.10667 10.4724 9.18C10.3477 9.246 10.2157 9.30833 10.0764 9.367C9.93704 9.42567 9.80505 9.49533 9.68037 9.576C9.55571 9.64933 9.45305 9.74833 9.37236 9.873C9.2917 9.99033 9.25137 10.1517 9.25137 10.357V10.753C9.25137 10.8777 9.26238 10.995 9.28438 11.105C9.3137 11.215 9.37971 11.3067 9.48237 11.38ZM9.28438 13.778C9.40171 13.9173 9.64004 13.987 9.99937 13.987C10.3 13.987 10.5127 13.943 10.6374 13.855C10.7694 13.7597 10.8464 13.646 10.8684 13.514C10.8977 13.3747 10.9124 13.2353 10.9124 13.096C10.9124 12.766 10.8537 12.535 10.7364 12.403C10.6264 12.2637 10.3844 12.194 10.0104 12.194C9.70972 12.194 9.49705 12.238 9.37236 12.326C9.24771 12.414 9.1707 12.5277 9.14138 12.667C9.11938 12.8063 9.10837 12.9457 9.10837 13.085C9.10837 13.4077 9.16704 13.6387 9.28438 13.778Z"
                        fill="#BCC0D1"
                    />
                </svg>

                <span>Documents</span>
                <span className="text-gray-400">3 Gb</span>
            </button>
        </div>
    );
};

export default SidebarRight;
