export const DrawXAxisLegend = ({
  normalSettings: { totalWidth, totalHeight, horizontal },
  legendSettings: { useLegend, legendOnBottom, legendMargin, legendSize, legendWeight, legendColor, legendReverse, legendMove }
}) => {
  const width = totalWidth / 2 + (horizontal ? -legendMove : legendMove);

  return (
    useLegend && (
      <g
        transform={
          horizontal
            ? `translate(${legendOnBottom ? -legendMargin : totalHeight + legendMargin},${width})`
            : `translate(${width},${legendOnBottom ? totalHeight + legendMargin : -legendMargin})`
        }
      >
        <text
          fontSize={legendSize}
          fontWeight={legendWeight}
          color={legendColor}
          dominantBaseline="middle"
          textAnchor="middle"
          transform={horizontal ? `rotate(${legendReverse ? 90 : -90})` : `rotate(${legendReverse ? 180 : 0})`}
        >
          Category
        </text>
      </g>
    )
  );
};
