export default function(req, res){
    const params = req.query.params

    res.status(200).json(params)
}