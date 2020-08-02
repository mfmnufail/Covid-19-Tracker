import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";



function InfoBox({title, cases, total}) {
    return (
            <Card className = "infoBox">
                <CardContent>
                    <Typography color = "textSecondary" className="infoBox__title">{title}</Typography>
                    <h2>{cases}</h2>
                    <Typography color = "textSecondary" className = "infoBox__total">{total} Total</Typography>
                </CardContent>
            </Card>
        
    )
}

export default InfoBox
