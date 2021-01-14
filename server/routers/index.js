import express from "express";

import * as monthController from "../controllers/month";
import * as expenseController from "../controllers/expense";

const router = express.Router();

router.post("/months", monthController.createMonth);
router.get("/months", monthController.getAllMonth);
router.get("/months/:monthId", monthController.getSingleMonth);
router.put("/months/:monthId", monthController.updateMonth);
router.delete("/months/:monthId", monthController.deleteMonth);

router.post("/expenses", expenseController.createExpense);
router.get("/expenses", expenseController.getAllExpense);
router.get("/expenses/:expenseId", expenseController.getSingleExpense);
router.put("/expenses/:expenseId", expenseController.updateExpense);
router.delete("/expenses/:expenseId", expenseController.deleteExpense);

export default router;
