const {Router} = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const transactionController = require("../controllers/transaction.controller")
const transactionRoute = Router();

/**
 * - POST/api/transactions/
 * Create a new transaction
 */

transactionRoute.post("/", authMiddleware.authMiddleware,transactionController.createTransaction)

/**
 * POST/ api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */

transactionRoute.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)



module.exports = transactionRoute;