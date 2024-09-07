import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="bg-black
            w-[60vh]
            h-fit 
            mt-16 
            rounded-sm
            shadow-[5px_5px_15px_2px_#278ea587]
            m-auto
            min-w-[250px]
            block
            py-5
            px-3
            ">
                <h1 className="text-[2em] text-center font-semibold w-[100%]">HipertrApp</h1>
                <form method="POST">
                    <label className="text-white w-[100%] inline-block ms-1 text-lg" htmlFor="htmlFor">Usuario</label>
                    <input className="bg-black py-1 border-solid border-b-2 border-[#278EA5] w-[75%] max-w-[100%] ms-2 rounded-sm focus:w-[80%]" type="text" name="username" id="inputUsername" />
                    <br />
                    <label className="text-white w-[100%] inline-block ms-1 text-lg mt-2" htmlFor="inputPassword">Contraseña</label>
                    <input className="bg-black py-1 border-solid border-b-2 border-[#278EA5] w-[75%] max-w-[100%] ms-2 rounded-sm focus:w-[80%]" type="password" name="password" id="inputPassword" />
                    <br />
                    <label className="text-white w-[100%] inline-block ms-1 text-lg mt-2" htmlFor="inputRePassword">Repite la conraseña</label>
                    <input className="bg-black py-1 border-solid border-b-2 border-[#278EA5] w-[75%] max-w-[100%] ms-2 rounded-sm focus:w-[80%]" type="password" name="rePassword" id="inputPassword" />
                    <br />
                    <div className="text-center">
                        <button className="basic_button" style={{paddingLeft: "2em", paddingRight: "2em"}}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}