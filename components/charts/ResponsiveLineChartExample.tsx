import { ResponsiveLine } from "@nivo/line"

const exampleData = [
  {
    id: "japan",
    color: "hsl(239, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 100
      },
      {
        x: "helicopter",
        y: 175
      },
      {
        x: "boat",
        y: 3
      },
      {
        x: "train",
        y: 17
      },
      {
        x: "subway",
        y: 153
      },
      {
        x: "bus",
        y: 230
      },
      {
        x: "car",
        y: 44
      },
      {
        x: "moto",
        y: 87
      },
      {
        x: "bicycle",
        y: 212
      },
      {
        x: "horse",
        y: 196
      },
      {
        x: "skateboard",
        y: 202
      },
      {
        x: "others",
        y: 50
      }
    ]
  },
  {
    id: "france",
    color: "hsl(214, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 275
      },
      {
        x: "helicopter",
        y: 126
      },
      {
        x: "boat",
        y: 279
      },
      {
        x: "train",
        y: 232
      },
      {
        x: "subway",
        y: 150
      },
      {
        x: "bus",
        y: 298
      },
      {
        x: "car",
        y: 252
      },
      {
        x: "moto",
        y: 123
      },
      {
        x: "bicycle",
        y: 246
      },
      {
        x: "horse",
        y: 244
      },
      {
        x: "skateboard",
        y: 214
      },
      {
        x: "others",
        y: 256
      }
    ]
  },
  {
    id: "us",
    color: "hsl(57, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 37
      },
      {
        x: "helicopter",
        y: 163
      },
      {
        x: "boat",
        y: 262
      },
      {
        x: "train",
        y: 148
      },
      {
        x: "subway",
        y: 169
      },
      {
        x: "bus",
        y: 269
      },
      {
        x: "car",
        y: 171
      },
      {
        x: "moto",
        y: 142
      },
      {
        x: "bicycle",
        y: 105
      },
      {
        x: "horse",
        y: 39
      },
      {
        x: "skateboard",
        y: 205
      },
      {
        x: "others",
        y: 237
      }
    ]
  },
  {
    id: "germany",
    color: "hsl(154, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 57
      },
      {
        x: "helicopter",
        y: 122
      },
      {
        x: "boat",
        y: 139
      },
      {
        x: "train",
        y: 4
      },
      {
        x: "subway",
        y: 96
      },
      {
        x: "bus",
        y: 191
      },
      {
        x: "car",
        y: 92
      },
      {
        x: "moto",
        y: 206
      },
      {
        x: "bicycle",
        y: 288
      },
      {
        x: "horse",
        y: 246
      },
      {
        x: "skateboard",
        y: 23
      },
      {
        x: "others",
        y: 146
      }
    ]
  },
  {
    id: "norway",
    color: "hsl(16, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 132
      },
      {
        x: "helicopter",
        y: 101
      },
      {
        x: "boat",
        y: 141
      },
      {
        x: "train",
        y: 268
      },
      {
        x: "subway",
        y: 240
      },
      {
        x: "bus",
        y: 4
      },
      {
        x: "car",
        y: 130
      },
      {
        x: "moto",
        y: 237
      },
      {
        x: "bicycle",
        y: 189
      },
      {
        x: "horse",
        y: 251
      },
      {
        x: "skateboard",
        y: 218
      },
      {
        x: "others",
        y: 103
      }
    ]
  }
];

export default function ResponsiveLineChartExample() {
  return (
      <ResponsiveLine
        data={exampleData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          // orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          // orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
  );
}