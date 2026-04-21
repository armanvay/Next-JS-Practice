"use client";
import React from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddTasks = () => {

  
  return (
    <Modal>
      {/* <button className='btn'>Add to Post </button> */}
      <Button variant="secondary">Add to post</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your description" />
                  </TextField>
                  <TextField className="w-full" name="Id">
                    <Label>Number</Label>
                    <Input placeholder="Enter your Id Number" />
                  </TextField>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button type="submit">Send Message</Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default AddTasks;
