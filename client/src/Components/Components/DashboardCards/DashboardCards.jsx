import React from "react";

import CardStyle from './DashboardCards.styles'
const DashboardCard = (name) => (
<CardStyle>
<p>{name.name[0]}</p>
<h2>{name.name[1]}</h2>
</CardStyle>
);


export default DashboardCard;
