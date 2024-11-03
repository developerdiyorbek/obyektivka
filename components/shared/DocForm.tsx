"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { saveAs } from "file-saver";
import { validationSchema } from "@/lib/validation";

const TitleForm = () => {
  const generateDocFile = async (title: string) => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun(title)],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "document.docx");
  };

  return (
    <Formik
      initialValues={{ title: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await generateDocFile(values.title);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex flex-col gap-4 w-1/2 mx-auto">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <Field
            name="title"
            as={Input}
            placeholder="Enter title"
            className={`border rounded p-2 outline-none ${
              errors.title && touched.title ? "ring-red-500 ring-2" : ""
            }`}
          />
          <ErrorMessage
            name="title"
            component="span"
            className="text-red-500 text-sm"
          />

          <Button type="submit" disabled={isSubmitting} className="mt-4">
            Generate Doc File
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TitleForm;
