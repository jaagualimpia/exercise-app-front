"use client"
import { useEffect, useState } from "react"
import { DynamicFormRegistry } from "./internal-components/dynamic-form-registry"
import { getLastExercises, postExercisesRecord } from "@/app/services/exercise.service"


export const DynamicForm = () => {
    const [recentRecords, setRecentRecords] = useState<object[] | undefined>()
    const [counter, setCounter] = useState<number>(1)
    const [registries, setRegistries] = useState([<DynamicFormRegistry  recentRecords={recentRecords} registryId={counter} key={counter} />])

    let idForNewRegistry = counter

    useEffect(() => {
        const fetchRecentExercises = async () => {
                const res = await getLastExercises(10);
                setRecentRecords(res);
        };
        
        fetchRecentExercises();
    }, []);

    const handleAddButtonClick = () => {
        idForNewRegistry += 1
        setCounter(counter + 1)
        console.log(recentRecords)
        setRegistries([...registries, <DynamicFormRegistry  recentRecords={recentRecords} registryId={idForNewRegistry} key={idForNewRegistry} />])
    }

    const handleResetRegistriesButton = () => {
        idForNewRegistry += 1

        setCounter(counter + 1)
        setRegistries([<DynamicFormRegistry  recentRecords={recentRecords} registryId={idForNewRegistry} key={idForNewRegistry} />])
    }

    const postData = async (formData: FormData) => {
        const registries: object[] = []
        const keyNames = ["weight", "lower_bound", "upper_bound", "name", "unit", "failure"]
        const commonData = {
            "exercise_day": (document.getElementsByName("exercise_day")[0] as HTMLInputElement).value,
            "date": (document.getElementsByName("date")[0] as HTMLInputElement).value,
            "personal_weight": (document.getElementsByName("weight")[0] as HTMLInputElement).value
        }

        for (let i = 1; i <= counter; i++) {
            const newObj: { [key: string]: any } = {}

            keyNames.forEach((element) => {
                newObj[element] = formData.get(`${element}_${i}`)
            })

            registries.push(Object.assign({}, commonData, newObj))
        }

        const response = await postExercisesRecord(registries )
        console.log(response.json())
    }


    return (
        <div className="bg-black rounded-sm m-auto w-fit pt-10 shadow-[5px_5px_15px_2px_#278ea587] py-8 ">
            <div id="dynamic-form-top-row" className="flex mb-6">
                <div id="dynamic-form-top-row-col-left">
                    <h1 className="text-white font-semibold me-20 ms-4">Enter your training metrics</h1>
                </div>
                <div id="dynamic-form-top-row-col-right">
                    <span className="flex gap-3 ml-auto">
                        <input type="date" className="bg-[#000000] text-[#9F9F9F]" name="date"/>
                        <input type="text" placeholder="exercise day" className="bg-[#000000] w-28 placeholder-[#9F9F9F]" name="exercise_day"/>
                        <input type="text" placeholder="weight" className="me-4 bg-[#000000] placeholder-[#9F9F9F]" name="weight"/>
                    </span>
                </div>
            </div>
            <div id="dynamic-form-bottom-row" className="justify-center flex max-h-[60vh] overflow-auto">
                <form action={postData}>
                    {registries}
                    <button className="basic_button w-[100%] m-[0px]" onClick={handleAddButtonClick} type="button">
                        Add exercise record +
                    </button>

                    <div className="justify-center flex gap-2 w-[100%]">
                        <div id="dynamic-form-bottom-col-1" className="w-[50%]">
                            <button className="basic_button w-[100%] !bg-green-700" type="submit">
                                Insert records
                            </button>
                        </div>

                        <div id="dynamic-form-bottom-col-2" onClick={handleResetRegistriesButton} className="w-[50%]">
                            <button className="basic_button w-[100%] !bg-red-700" type="button">
                                Reset records
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}