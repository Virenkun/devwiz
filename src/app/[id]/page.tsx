"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { convertCsvToJson } from "@/utilities/convertCsvToJson";
import { base64Decode, base64Encode } from "@/utilities/base64Encode";
import { hexToRgb } from "@/utilities/hexToRgb";
import { imageToBase64 } from "@/utilities/imageToBase64";
import { jsonToCsv } from "@/utilities/jsonToCsv";
import { usePathname } from "next/navigation";
import { UtilitiesList } from "@/data/utlitiesList";

const UtilityPage = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [copyButton, setCopyButton] = useState<string>("Copy");

  const route = usePathname();
  const selectedUtility = route.split("/")[1];

  const utility = UtilitiesList.find((item) => item.id === selectedUtility);

  useEffect(() => {
    setInput("");
    setOutput("");
    setError("");
  }, [selectedUtility]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInput(value);

    try {
      let result: any;

      switch (selectedUtility) {
        case "convert-csv-to-json":
          result = JSON.stringify(convertCsvToJson(value), null, 2);
          break;
        case "base64-encode":
          result = base64Encode(value);
          break;
        case "base64-decode":
          result = base64Decode(value);
          break;
        case "json-format":
          result = JSON.stringify(JSON.parse(value), null, 2);
          break;
        case "hex-to-rgb":
          result = hexToRgb(value);
          break;
        case "image-to-base64":
          const file = new File([value], "image.jpg", { type: "image/jpeg" });
          result = imageToBase64(file);
          break;
        case "json-to-csv":
          result = jsonToCsv(value);
          break;
        default:
          throw new Error("Invalid utility selected.");
      }

      setOutput(result);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setOutput("");
    }
  };

  const handleCopyClick = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopyButton("Copied!");
      setTimeout(() => {
        setCopyButton("Copy");
      }, 5000);
    }
  };

  if (!utility) {
    return (
      <div className="flex flex-col items-center gap-36">
        <h2 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
          Utility Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-36">
      <h2 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight">
        Convert, optimize, and simplify your development process with our free online tools.
      </h2>
      <div className="flex flex-col items-center">
        <Card className="w-[900px]">
          <CardHeader>
            <CardTitle>{utility.name}</CardTitle>
            <CardDescription>
              {utility.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="input"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    Input
                  </Label>
                  <Textarea
                    id="input"
                    placeholder={`Type or paste your ${utility.name.toLowerCase()} here.`}
                    style={{ height: "180px" }}
                    value={input}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="output"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    Output
                  </Label>
                  <Textarea
                    id="output"
                    placeholder="Output will appear here."
                    value={error ? `Error: ${error}` : output}
                    readOnly
                    style={{ height: "180px", color: error ? "red" : "white" }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleCopyClick} disabled={!output}>
              {copyButton}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UtilityPage;
