interface dataEntriesProp {
    exercise_day: string,
    personal_weight: number | string,
    date: Date,
    weight: number,
    lower_bound: number,
    upper_bound: number,
    name: string,
    unit: string,
    failure: boolean
}

const applyValidations = (element: dataEntriesProp) => {

    if (element.weight.toString() !== "") {

        [element.lower_bound, element.upper_bound] = [0, 0]
        element.weight = parseFloat(element.weight.toString())

    } else {

        element.lower_bound = parseFloat(element.lower_bound.toString())
        element.upper_bound = parseFloat(element.upper_bound.toString())
        
        element.weight = (element.upper_bound + element.lower_bound) / 2
    }

    element.failure = element.failure.toString() !== ""

    return element
}

export const getLastExercises = async (recordsNumber: number) => {
    const response = await fetch(`api/exercise?records=${recordsNumber}`, {
        method: "GET"
    })

    return await response.json()
}

export const postExercisesRecord = async (data: object[]) => {
    let tmpData = data as dataEntriesProp[]
    const finalData = tmpData.map(element => applyValidations(element))

    const response = await fetch("api/exercise", {
        method: "POST",
        body: JSON.stringify(finalData)
    })

    return response 
}