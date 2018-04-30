export const searchBy = ({ text="",startDate=new Date(0),endDate=new Date(2100,1) }={}) => ({ type: "SET_FILTERS", filters:{text,startDate,endDate} });

export const sortBy = ({key=""}="") => key ==""? { type:"NO_SORT" } : { type:"SORT_BY_KEY", key };
