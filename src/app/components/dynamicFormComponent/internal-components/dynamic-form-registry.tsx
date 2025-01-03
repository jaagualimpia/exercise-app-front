import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"

interface DynamicFormRegistryProps {
    registryId: number
    recentRecords: { [key: string]: any }[] | undefined
}

export const DynamicFormRegistry = ({ registryId, recentRecords }: DynamicFormRegistryProps) => {
    const updateRecordsValues = (record: { [key: string]: any }) => {
        const names = ["lower_bound", "upper_bound", "weight"]
        // const form = document.forms[0]
        
        names.forEach(name => {
            const inputElement = document.getElementsByName(`${name}_${registryId}`)[0] as HTMLInputElement
            inputElement.value = record[name]
            console.log(record, record[name], name)
        })
    }
    
    const onInputChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const recordValue = e.target.value
        let results = recentRecords?.filter((element) => element.name === recordValue)
        if (results) updateRecordsValues(results[0])
    }
    return (
        <div className="bg-black 
        rounded-sm 
        h-fit 
        w-[45em]
        p-[2.5em]
        mb-5
        mt-5
        shadow-[0px_0px_1px_1px_#278ea587]
        ">
            <div id="top-row" className="inline-block mb-[1.5em]">
                <input list={`browsers_${registryId}`} onChange={onInputChangeHandler} className="me-4 bg-[#141414] placeholder-[#9F9F9F]" type="text" name={`name_${registryId}`} placeholder="Insert exercise name" />
                <datalist id={`browsers_${registryId}`} >
                    {recentRecords?.map((record, index) => <option key={index} value={record.name} />)}
                </datalist>
                <input className="bg-[#141414] placeholder-[#9F9F9F]" type="text" name={`unit_${registryId}`} placeholder="Insert unit" />
            </div>
            <div id="bottom-row" className="flex w-[100%] gap-5 ">
                <div className="col w-25 ">
                    <h1 className="text-center">Weight</h1>
                    <input  type="text" name={`weight_${registryId}`} placeholder="value" className="bg-[#141414] placeholder-[#9F9F9F]" autoComplete="off" />
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Upper bound</h1>
                    <input type="text" name={`upper_bound_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Lower bound</h1>
                    <input type="text" name={`lower_bound_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Failure</h1>
                    <input type="text" name={`failure_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
            </div>

        </div>
    )
}