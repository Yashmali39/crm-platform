const express = require('express');
const router = express.Router();

const { createLead,
        getLeads,
        updateLead,
        deleteLead,
        searchLeads,
        getStats,
} = require('../controllers/leadController');


router.post("/", createLead);

router.get("/", getLeads);

router.get("/stats", getStats);

router.get("/search", searchLeads);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);


module.exports = router;