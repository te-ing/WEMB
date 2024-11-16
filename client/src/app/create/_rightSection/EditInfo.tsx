import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import EditBackground from "./EditBackground";
import EditTitle from "./EditTitle";

export default function EditInfo() {
  return (
    <Card className="w-full flex flex-col gap-2">
      <CardHeader className="pb-2">
        <CardTitle>HEADER</CardTitle>
      </CardHeader>
      <EditTitle />
      <EditBackground />
      <CardFooter>FOOTER</CardFooter>
    </Card>
  );
}
