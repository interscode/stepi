export const getRouteColor = (routeName: string): string => {
  if (routeName.startsWith("T")) {
    return "#D35400";
  } else if (routeName.startsWith("C")) {
    return "#27AE60";
  } else if (routeName.startsWith("L")) {
    return "#F39C12";
  } else {
    return "#D35400"; 
  }
};