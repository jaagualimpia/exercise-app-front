import Link from "next/link";

export const CollapsedNavBar = () => {
    return (
        <>
            <div className="h-[100%] w-20 bg-[#141414] absolute">
                <div className="h-5"></div>
                <Link href={"/home"} className="h-fit">
                    <span className="material-symbols-outlined text-center w-[100%] mb-5 !text-[3em] cursor-pointer hover:text-[#278EA5] hover:underline">
                        home
                    </span>
                </Link>

                <Link href={"/registry"} className="h-fit">
                    <span className="material-symbols-outlined text-center w-[100%] !text-[3em] cursor-pointer hover:text-[#278EA5] hover:underline">
                        app_registration
                    </span>
                </Link>
            </div>
        </>
    )
}