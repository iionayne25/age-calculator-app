export default function handler(req, res) {
    // Get data submitted in request's body.
    const { day, month, year } = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log("d/m/y: ", day,month,year);

    
    // Guard clause checks for day and month year,
    // and returns early if they are not found
    if (!day) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ day: "day not found" });
      
    }else if(!month){
        return res.status(400).json({ month: "month not found" });
    }else if(!year){
        return res.status(400).json({ year: " year not found" });
    }

    const result = ({ day: `${day}`,month: `${month}`,year: `${year}`})
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json(result);
    res.end()
}
