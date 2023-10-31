const distanceBetweenTwoPoints = ({ x1, y1, x2, y2 }) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

export const getBorderRadius = ({ x1, y1, x2, y2 }) => {
  const borderRadius = distanceBetweenTwoPoints({ x1, y1, x2, y2 });
  console.log(borderRadius);
  return borderRadius + "," + borderRadius;
};
