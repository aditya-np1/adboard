import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Spacer,
  Textarea,
  useToast,
} from "@chakra-ui/react";


function ShopForm() {
  const [formData, setFormData] = useState({
    shop_id: "",
    name: "",
    district: "",
    state: "",
    address: "",
    pincode: "",
    type: "",
    avgusers: "",
    img: "",
    videos: "",
    importance: "",
  });

  const toast = useToast();
  const handleChange = (event) => {
event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to server or handle it as needed
    toast({
      title: "Form Submitted!",
      description: "The shop information has been successfully submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box textAlign="center">
      <h2>Shop Information Form</h2>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Shop ID</FormLabel>
          <Input
            type="text"
            name="shop_id"
            value={formData.shop_id}
            onChange={handleChange}
          />
        </FormControl>
        {/* ... other fields (name, district, state, address, pincode, type, avgusers) */}
        <FormControl isRequired>
          <FormLabel>Shop Type</FormLabel>
          <Select name="type" value={formData.type} onChange={handleChange}>
            <option value="Select Your Shop Type">Select Your Shop Type</option>
            <option value="small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Average Users</FormLabel>
          <Input
            type="number"
            name="avgusers"
            value={formData.avgusers}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Shop Image</FormLabel>
          <Input type="file" name="img" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Shop Videos</FormLabel>
          <Input type="file" name="videos" multiple onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Importance</FormLabel>
          <Textarea
            name="importance"
            value={formData.importance}
            onChange={handleChange}
          />
        </FormControl>
        <Spacer />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default ShopForm;