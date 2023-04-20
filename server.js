const express = require("express");
const port = 5000;

const app = express();

const flowcharts = [
  {
    id: 1,
    type: "element",
    tagName: "svg",
    attributes: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2107",
      height: "1897",
      viewBox: "0 0 2107 1897",
      fill: "none",
    },
    children: [
      {
        type: "text",
        content: "",
      },
      {
        type: "element",
        tagName: "rect",
        attributes: {
          width: "2107",
          height: "1897",
          fill: "#F5F5F5",
        },
        children: [],
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "element",
        tagName: "g",
        attributes: {
          id: "Component 1",
        },
        children: [
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "Rectangle 1",
              x: "693",
              y: "471",
              width: "812",
              height: "368",
              fill: "#F44C4C",
              stroke: "black",
              "stroke-width": "4",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "squoran",
              x: "321",
              y: "22",
              width: "464",
              height: "188",
              fill: "#D9D9D9",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "line",
            attributes: {
              id: "plorp",
              x1: "786.391",
              y1: "117.688",
              x2: "1069.39",
              y2: "472.688",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "g",
            attributes: {
              id: "master",
            },
            children: [
              {
                type: "text",
                content: "",
              },
              {
                type: "element",
                tagName: "rect",
                attributes: {
                  width: "2",
                  height: "8",
                  transform: "translate(294 440)",
                  fill: "white",
                },
                children: [],
              },
              {
                type: "text",
                content: "",
              },
            ],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "line",
            attributes: {
              id: "chester",
              x1: "322.409",
              y1: "109.288",
              x2: "139.409",
              y2: "369.288",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "tester",
              y: "369",
              width: "278",
              height: "121",
              fill: "#67E753",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "text",
            attributes: {
              id: "SOME EXMAPLE TEXT",
              fill: "black",
              "xml:space": "preserve",
              style: "white-space: pre",
              "font-family": "Inter",
              "font-size": "32",
              "letter-spacing": "0em",
            },
            children: [
              {
                type: "element",
                tagName: "tspan",
                attributes: {
                  x: "384",
                  y: "126.136",
                },
                children: [
                  {
                    type: "text",
                    content: "SOME EXMAPLE TEXT",
                  },
                ],
              },
            ],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "text",
            attributes: {
              id: "some more text",
              fill: "black",
              "xml:space": "preserve",
              style: "white-space: pre",
              "font-family": "Inter",
              "font-size": "32",
              "letter-spacing": "0em",
            },
            children: [
              {
                type: "element",
                tagName: "tspan",
                attributes: {
                  x: "948",
                  y: "676.136",
                },
                children: [
                  {
                    type: "text",
                    content: "some more text",
                  },
                ],
              },
            ],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "Rectangle 3",
              x: "327",
              y: "1188",
              width: "1213",
              height: "125",
              rx: "20",
              fill: "#D9D9D9",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "Rectangle 4",
              x: "327",
              y: "1382",
              width: "1213",
              height: "125",
              rx: "20",
              fill: "#D67EFF",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "Rectangle 5",
              x: "344",
              y: "1495",
              width: "1213",
              height: "125",
              rx: "20",
              fill: "#D9D9D9",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "line",
            attributes: {
              id: "Line 1",
              x1: "1508",
              y1: "602.5",
              x2: "2106",
              y2: "605.598",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "line",
            attributes: {
              id: "Line 2",
              x1: "689.984",
              y1: "723.5",
              x2: "343.984",
              y2: "712.5",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "text",
            attributes: {
              id: "text up here",
              fill: "black",
              "xml:space": "preserve",
              style: "white-space: pre",
              "font-family": "Inter",
              "font-size": "32",
              "letter-spacing": "0em",
            },
            children: [
              {
                type: "element",
                tagName: "tspan",
                attributes: {
                  x: "1188",
                  y: "24.1364",
                },
                children: [
                  {
                    type: "text",
                    content: "text up here",
                  },
                ],
              },
            ],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "rect",
            attributes: {
              id: "Rectangle 2",
              x: "1087.5",
              y: "42.5",
              width: "576",
              height: "56",
              fill: "#75CDFF",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "line",
            attributes: {
              id: "Line 3",
              x1: "1095.5",
              y1: "829.048",
              x2: "1014.5",
              y2: "1676.05",
              stroke: "black",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "element",
            tagName: "ellipse",
            attributes: {
              id: "Ellipse 1",
              cx: "937.5",
              cy: "1786.5",
              rx: "383.5",
              ry: "110.5",
              fill: "#D9D9D9",
            },
            children: [],
          },
          {
            type: "text",
            content: "",
          },
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Check out these dope flowchart JSON objects" });
});

//Get all charts
app.get("/api/flowcharts", (req, res) => {
  res.json({ success: true, data: flowcharts });
});

// Get single idea
app.get("/api/flowcharts/:id", (req, res) => {
  const chart = flowcharts.find((chart) => chart.id === +req.params.id);

  if (!chart) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: flowcharts });
});

app.listen(port, () => console.log(`Server listening on ${port}`));
