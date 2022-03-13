function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence)
    {
        if(!isSober || isTired)
        {
          return "You shouldn't drive"
        }
        return "You can drive"
            
    }    
    else
    {
        return "You cannot drive"
    }       

}

module.exports = CanDrive;
