export const searchBy = ({ text="",startDate=undefined,endDate=undefined }={}) => ({ type: "SET_FILTERS", filters:{text,startDate,endDate} });

export const sortBy = ({key=""}="") => key ==""? { type:"NO_SORT" } : { type:"SORT_BY_KEY", key };
