import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

interface Document {
  id: string;
  name: string;
  date: string;
  downloadUrl: string;
}

export default function PrivateZone() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("https://api.docuware.com/documents", {
          method: "GET",
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Private Zone</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.id}</TableCell>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>
                <Button onClick={() => window.open(doc.downloadUrl, "_blank")}>Download</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
