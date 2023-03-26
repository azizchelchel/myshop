// update permissions
export const updatePermissions = (req,res,next) => {
    const userId = req.params.id;
    // new data to update with
    const data = req.body;
    return updatePermissions(data, userId)
    .then(
       (permissions) => {
            res.status(200).json(
                {
                    success: true,
                    meaasage: "update permission success",
                    permissions: permissions 
                }
            )
       }
    )
    .catch(
        async (error) => {
            console.log(error);
            res.status(500).json(
                {
                    success: false,
                    message: "system error",
                    error: error
                }
            );
        }
    )
}