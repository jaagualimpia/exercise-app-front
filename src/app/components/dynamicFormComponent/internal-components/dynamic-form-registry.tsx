interface DynamicFormRegistryProps {
    registryId: number
}

export const DynamicFormRegistry = ({registryId}: DynamicFormRegistryProps) => {
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
                <input className="me-4 bg-[#141414] placeholder-[#9F9F9F]" type="text" name={`exerciseName_${registryId}`} placeholder="Insert exercise name" />
                <input className="bg-[#141414] placeholder-[#9F9F9F]"type="text" name={`unit_${registryId}`} placeholder="Insert unit" />
            </div>
            <div id="bottom-row" className="flex w-[100%] gap-5 ">
                <div className="col w-25 ">
                    <h1 className="text-center">Weight</h1>
                    <input type="text" name={`weight_${registryId}`} placeholder="value" className="bg-[#141414] placeholder-[#9F9F9F]"/>
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Upper bound</h1>
                    <input type="text" name={`upperBound_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Lower bound</h1>
                    <input type="text" name={`lowerBound_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
                <div className="col w-25 ">
                    <h1 className="text-center">Failure</h1>
                    <input type="text" name={`failure_${registryId}`} placeholder="value" className="w-[100%] bg-[#141414] placeholder-[#9F9F9F]" />
                </div>
            </div>
            
        </div>
    )
}