import { calculateInputData } from "../utils/calculateIntersection";
import { getCoordinatesForVertex } from "../utils/getCoordinates";
import { getBorderRatio } from "../utils/getBorderRatio";
import { getBorderRadius } from "../utils/getBorderRadius";

const PieTest = () => {
  const percent = 0.4;
  const startAngle = 1;
  const pieRadius = 1;
  const innerRadius = 0.6;
  const borderRadius = 0.1;
  const vertex = getCoordinatesForVertex({
    percent,
    startAngle,
    pieRadius,
    innerRadius,
  });
  const calcPos = calculateInputData({ vertex, pieRadius, innerRadius, borderRadius });
  console.log(vertex);
  return (
    <>
      <svg width="500" height="500" viewBox="-1 -1 2 2" style={{ backgroundColor: "black" }}>
        {/* <path
          d={`
            M ${vertex.pos1.x},${vertex.pos1.y + borderRadius}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos1.x1},${calcPos.pos1.y1}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x2},${calcPos.pos2.y2}
            A ${borderRadius},${borderRadius},0,0,1,${vertex.pos2.x - borderRadius},${vertex.pos2.y}
            L ${innerRadius + borderRadius},${vertex.pos4.y}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos.pos4.x2},${calcPos.pos4.y2}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos3.x1},${calcPos.pos3.y1}
            A ${borderRadius},${borderRadius},0,0,1,${vertex.pos3.x},${-(
            innerRadius + borderRadius
          )}
            Z
            `}
          fill="red"
        /> */}
        <path
          d={`
            M ${getBorderRatio({
              x: vertex.pos1.x,
              y: vertex.pos1.y,
              borderRadius,
              percent: (startAngle % 90) / 90,
              order: 1,
            })}
            A ${getBorderRadius({
              x1: vertex.pos1.x,
              y1: vertex.pos1.y,
              x2: calcPos.pos1.x,
              y2: calcPos.pos1.y,
            })},0,0,1,${calcPos.pos1.x},${calcPos.pos1.y}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos.pos2.x},${calcPos.pos2.y}
            A ${getBorderRadius({
              x1: calcPos.pos2.x,
              y1: calcPos.pos2.y,
              x2: vertex.pos2.x,
              y2: vertex.pos2.y,
            })},0,0,1,${getBorderRatio({
            x: vertex.pos2.x,
            y: vertex.pos2.y,
            borderRadius,
            percent,
            order: 1,
          })}
            L ${getBorderRatio({
              x: vertex.pos3.x,
              y: vertex.pos3.y,
              borderRadius,
              percent,
              order: 2,
            })}
            A ${getBorderRadius({
              x1: vertex.pos3.x,
              y1: vertex.pos3.y,
              x2: calcPos.pos3.x,
              y2: calcPos.pos3.y,
            })},0,0,1,${calcPos.pos3.x},${calcPos.pos3.y}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos.pos4.x},${calcPos.pos4.y}
            A ${getBorderRadius({
              x1: calcPos.pos4.x,
              y1: calcPos.pos4.y,
              x2: vertex.pos4.x,
              y2: vertex.pos4.y,
            })},0,0,1,${getBorderRatio({
            x: vertex.pos4.x,
            y: vertex.pos4.y,
            borderRadius,
            percent: (startAngle % 90) / 90,
            order: 2,
          })}
            Z
            `}
          fill="#bae7ff"
        />
        <circle cx={vertex.pos1.x} cy={vertex.pos1.y} r="0.02" fill="yellow" />
        <circle cx={vertex.pos2.x} cy={vertex.pos2.y} r="0.02" fill="yellow" />
        <circle cx={vertex.pos3.x} cy={vertex.pos3.y} r="0.02" fill="yellow" />
        <circle cx={vertex.pos4.x} cy={vertex.pos4.y} r="0.02" fill="yellow" />
        <circle cx={calcPos.pos1.x} cy={calcPos.pos1.y} r="0.02" fill="green" />
        <circle cx={calcPos.pos2.x} cy={calcPos.pos2.y} r="0.02" fill="green" />
        <circle cx={calcPos.pos3.x} cy={calcPos.pos3.y} r="0.02" fill="green" />
        <circle cx={calcPos.pos4.x} cy={calcPos.pos4.y} r="0.02" fill="green" />
        <circle cx={vertex.pos1.x} cy={vertex.pos1.y + borderRadius} r="0.02" fill="red" />
        <circle
          cx={vertex.pos2.x - borderRadius * (1 - ((percent * 4) % 1))}
          cy={vertex.pos2.y + borderRadius * ((percent * 4) % 1)}
          r="0.02"
          fill="red"
        />
        <circle
          cx={vertex.pos3.x - borderRadius * (1 - ((percent * 4) % 1))}
          cy={vertex.pos3.y + borderRadius * ((percent * 4) % 1)}
          r="0.02"
          fill="red"
        />
        <circle cx={vertex.pos4.x} cy={vertex.pos4.y - borderRadius} r="0.02" fill="red" />
      </svg>
      {/* <svg width="200" height="200" viewBox="-1 -1 2 2">
        <path
          d={`
            M ${pos5.x1},${pos5.y1 + borderRadius}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos5.pos1.x1},${calcPos5.pos1.y1}
            A ${pieRadius},${pieRadius},0,0,1,${calcPos5.pos2.x2},${calcPos5.pos2.y2}
            A ${borderRadius},${borderRadius},0,0,1,${pos5.x2},${pos5.y2 - borderRadius}
            L ${pos5.x4},${innerRadius + borderRadius}
            A ${borderRadius},${borderRadius},0,0,1,${calcPos5.pos4.x2},${calcPos5.pos4.y2}
            A ${innerRadius},${innerRadius},0,0,0,${calcPos5.pos3.x1},${calcPos5.pos3.y1}
            A ${borderRadius},${borderRadius},0,0,1,${pos5.x3},${-(innerRadius + borderRadius)}
            Z
            `}
          fill="red"
        />
      </svg> */}
      <svg width="200" height="200" viewBox="-200 -200 400 400">
        <path
          d="
            M0.954411986024752,-91.58622574154481
            A45,45,0,0,1,66.13567251053699,-131.80707510654162
            A147.46875,147.46875,0,0,1,147.2185779861251,-8.586182056403063
            A45,45,0,0,1,84.48970186389028,35.3615317367787
            L78.42729008430523,32.749658991261526
            A45,45,0,0,1,51.41022386428762,-4.582611698337274
            A51.614062499999996,51.614062499999996,0,0,0,24.55019311911691,-45.401535938423606
            A45,45,0,0,1,0.954411986024752,-84.98511100053119Z"
          fill="red"
        />
        <path
          d="M0.9544119860247626,-125.73462070918433
          A20,20,0,0,1,24.242184398639584,-145.4625337402895
          A147.46875,147.46875,0,0,1,143.18358577916447,35.291542754364606
          A20,20,0,0,1,115.85131880708445,48.87307722847817
          L63.26896633634415,26.218988673163306
          A20,20,0,0,1,51.30294930697356,5.658519255070727
          A51.614062499999996,51.614062499999996,0,0,0,15.10237364201243,-49.35513912583931
          A20,20,0,0,1,0.9544119860247626,-68.47982597870593Z"
          opacity="1"
          fill="url(#lines.bg.#e8c1a0)"
          stroke="rgb(216, 180, 149)"
          stroke-width="1"
        ></path>
      </svg>
      {/* <svg width="200" height="200" viewBox="-1.5 -1.5 3 3" xmlns="http://www.w3.org/2000/svg">
        <path
          d="
          M-0.5,-1.2
          A0.08,0.08,0,0,1,-0.46,-1.32
          A1.404375,1.404375,0,1,1,0.27,1.37
          A0.08,0.08,0,0,1,0.17,1.29
          L0.1764176490762595,0.34654265326402
          A0.08,0.08,0,0,1,0.20883307628646435,0.2822331793708781
          A0.35109375,0.35109375,0,0,0,0.03721447310784761,-0.34911588946991195
          A0.08,0.08,0,0,1,-0.02329681806538666,-0.3881652427831339Z"
          opacity="1"
          fill="#e8a838"
        ></path>
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="497.625" height="365.5" role="img">
        <g transform="translate(168.8125,122.75)">
          <path
            d="M1.1976181439965927,-119.67640745743161A3,3,0,0,1,4.302777679963104,-122.6745638029205A122.75,122.75,0,0,1,103.82855223909844,65.476669432194A3,3,0,0,1,99.6027802551437,66.35633320627036L53.77539230745067,35.159096949662896A3,3,0,0,1,52.8788913402153,31.156275060245942A61.375,61.375,0,0,0,4.002000987771496,-61.244384339250864A3,3,0,0,1,1.1976181439965838,-64.23799986703501Z"
            opacity="1"
            fill="#e8c1a0"
            stroke="rgb(216, 180, 149)"
            stroke-width="1"
          ></path>
          <path
            d="M98.25489247093782,68.3363219427302A3,3,0,0,1,98.98588890600809,72.59033198358736A122.75,122.75,0,0,1,-35.715911915538605,117.43907414502844A3,3,0,0,1,-37.68085774760361,113.59590551838073L-19.70093994135427,61.15413217079589A3,3,0,0,1,-16.077246921698162,59.231855925833926A61.375,61.375,0,0,0,48.37474427895261,37.77267187989144A3,3,0,0,1,52.42750452324479,37.13908568612275Z"
            opacity="1"
            fill="#f47560"
            stroke="rgb(227, 109, 89)"
            stroke-width="1"
          ></path>
          <path
            d="M-39.94662337811944,112.81907671942146A3,3,0,0,1,-43.85630777700843,114.6480997145976A122.75,122.75,0,0,1,-53.07435863755009,110.68276720073776A3,3,0,0,1,-54.435172405211745,106.58653196511693L-28.72732167449241,57.46908652089626A3,3,0,0,1,-24.8544914147637,56.117242283574825A61.375,61.375,0,0,0,-23.648605402560413,56.63597873714191A3,3,0,0,1,-21.966705571870097,60.37730337183662Z"
            opacity="1"
            fill="url(#lines.bg.#f1e15b)"
            stroke="rgb(224, 210, 85)"
            stroke-width="1"
          ></path>
          <path
            d="M-56.557309256088814,105.4758150518267A3,3,0,0,1,-60.69872799230079,106.69220646381197A122.75,122.75,0,0,1,-52.09489247890967,-111.14713076643427A3,3,0,0,1,-48.06231058443875,-109.60789703493525L-26.308407145076323,-58.61589058971056A3,3,0,0,1,-27.713178463438403,-54.761942665080966A61.375,61.375,0,0,0,-31.945895144716257,52.405633365152596A3,3,0,0,1,-30.849458525369474,56.35836960760601Z"
            opacity="1"
            fill="#e8a838"
            stroke="rgb(216, 156, 52)"
            stroke-width="1"
          ></path>
          <path
            d="M-45.85918265303065,-110.54778223705799A3,3,0,0,1,-44.17954004634602,-114.52393086727903A122.75,122.75,0,0,1,-4.302777679963282,-122.67456380292049A3,3,0,0,1,-1.1976181439967668,-119.6764074574316L-1.1976181439966398,-64.23799986703501A3,3,0,0,1,-4.002000987771554,-61.24438433925086A61.375,61.375,0,0,0,-20.351132220335653,-57.90269460353651A3,3,0,0,1,-24.105279213668357,-59.555775791833234Z"
            opacity="1"
            fill="#61cdbb"
            stroke="rgb(90, 191, 174)"
            stroke-width="1"
          ></path>
        </g>
      </svg> */}
      {/* 
      <svg width="400" height="400" viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,1 A1,1 0 0,1 0,-1 L0,-0.6 A0.6,0.6 0 0,0 0,0.6 Z" fill="#FF5733" />
        <path
          d="M0,1 A1,1 0 0,1 0,-1 L0,-0.6 A0.6,0.6 0 0,0 0,0.6 Z"
          transform="rotate(72 0 0)"
          fill="#3498db"
        />
        <path
          d="M0,1 A1,1 0 0,1 0,-1 L0,-0.6 A0.6,0.6 0 0,0 0,0.6 Z"
          transform="rotate(180 0 0)"
          fill="#27ae60"
        />
      </svg> */}
    </>
  );
};

export default PieTest;
