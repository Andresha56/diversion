import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Chip,
  Typography,
  Box,
  Button,
  InputBase,
} from "@mui/material";
import {
  TrendingUp,
  ErrorOutline,
  CheckCircle,
  Search,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const status = product.quantity < 5 ? "Low Stock" : "In Stock";
  const lowStock = product.quantity < 5;

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Card
        sx={{
          border: `2px solid ${product.stock < 5 ? "#f44336" : "#4caf50"}`,
          borderRadius: 3,
          p: 2,
          mb: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${product.price}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <TrendingUp sx={{ fontSize: 18, mr: 1, color: "#4caf50" }} />
            <Typography variant="body2">+12% this month</Typography>
          </Box>
          <Chip
            label={`${status}: ${product.quantity ?? "N/A"}`}
            sx={{ mt: 1 }}
            className="mr-8,"
            color={lowStock ? "error" : "success"}
          />
          <button>update</button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://diversionbackend.onrender.com/api/products/search",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
          }
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold">
          Inventory
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <InputBase
            placeholder="Search products..."
            sx={{ borderRadius: 2, pl: 2, width: 300 }}
            startAdornment={<Search sx={{ mr: 1 }} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Chip label={`Total Products: ${products.length}`} color="primary" />
          <Chip
            label={`Low Stock: ${products.filter((p) => p.stock < 5).length}`}
            color="error"
          />
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        gap={3}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};
