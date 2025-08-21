"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EnquiryForm({ triggerButton }: { triggerButton: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("✅ Enquiry submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setOpen(false);
    } else {
      alert("❌ Something went wrong. Try again!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Any button can trigger the form */}
      <div onClick={() => setOpen(true)}>{triggerButton}</div>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enquiry Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <Label>Phone</Label>
            <Input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea name="message" value={form.message} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
