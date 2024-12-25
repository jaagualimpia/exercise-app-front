export const getAllExercises = () => {

}

export const postExercisesRecord = async (data: object[]) => {
    const response = await fetch("api/exercise", {
        method: "POST",
        body: JSON.stringify(data)
    })

    return response
}