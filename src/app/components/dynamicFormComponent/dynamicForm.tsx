import { DynamicFormRegistry } from "./internal-components/dynamic-form-registry"

export const DynamicForm = () => {

    return (
        <div className="bg-black rounded-sm m-auto w-fit pt-10 shadow-[5px_5px_15px_2px_#278ea587] py-8 ">
            <div id="dynamic-form-top-row" className="flex mb-6">
                <div id="dynamic-form-top-row-col-left">
                    <h1 className="text-white font-semibold me-20 ms-4">Enter your training metrics</h1>
                </div>
                <div id="dynamic-form-top-row-col-right">
                    <span className="flex gap-3 ml-auto">
                        <input type="date" className="bg-[#000000] text-[#9F9F9F]"/>
                        <input type="text" placeholder="exercise day" className="bg-[#000000] w-28 placeholder-[#9F9F9F]"/>
                        <input type="text" placeholder="weight" className="me-4 bg-[#000000] placeholder    -[#9F9F9F]" />
                    </span>
                </div>
            </div>
            <div id="dynamic-form-bottom-row" className="justify-center flex">
                <DynamicFormRegistry />
            </div>
            <div className="justify-center flex">
                <button className="basic_button w-[90%]">
                    Agregar record +
                </button>
            </div>
        </div>
    )
}