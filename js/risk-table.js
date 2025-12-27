// Risk Table Interactive Dashboard

let risks = [];
let riskCounter = 0;

// Sample data
const sampleRisks = [
    { threat: 'Texnik nosozlik', consequence: 5, probability: 2, riskMeasure: 10, ranking: 2 },
    { threat: 'Mos kelmaydigan DTni o\'rnatish', consequence: 4, probability: 4, riskMeasure: 16, ranking: 1 },
    { threat: 'Virus tushishi', consequence: 3, probability: 3, riskMeasure: 9, ranking: 3 }
];

document.addEventListener('DOMContentLoaded', function() {
    const addRiskBtn = document.getElementById('add-risk');
    const exportBtn = document.getElementById('export-table');
    const sortBtn = document.getElementById('sort-risks');
    const clearBtn = document.getElementById('clear-risks');
    const riskForm = document.getElementById('risk-form');
    const modal = document.getElementById('risk-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-form');
    const consequenceInput = document.getElementById('consequence');
    const probabilityInput = document.getElementById('probability');

    // Load saved data
    loadRiskData();

    // Sample data removed - users should add their own data
    // If you want to show sample data, uncomment the lines below:
    // if (risks.length === 0) {
    //     sampleRisks.forEach(risk => {
    //         addRiskFromData(risk);
    //     });
    // }

    // Add risk button
    if (addRiskBtn) {
        addRiskBtn.addEventListener('click', function() {
            openModal();
        });
    }

    // Close modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }

    // Form submission
    if (riskForm) {
        riskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveRisk();
        });
    }

    // Update risk measure on input change
    if (consequenceInput && probabilityInput) {
        consequenceInput.addEventListener('input', updateRiskMeasure);
        probabilityInput.addEventListener('input', updateRiskMeasure);
        
        // Update display
        consequenceInput.addEventListener('input', function() {
            const display = document.getElementById('consequence-display');
            if (display) display.textContent = this.value;
        });
        
        probabilityInput.addEventListener('input', function() {
            const display = document.getElementById('probability-display');
            if (display) display.textContent = this.value;
        });
    }

    // Export button
    if (exportBtn) {
        exportBtn.addEventListener('click', exportTable);
    }

    // Sort button
    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            sortRisks();
        });
    }

    // Clear all button
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Barcha tahdidlarni o\'chirishni xohlaysizmi? Bu amalni qaytarib bo\'lmaydi.')) {
                clearAllRisks();
            }
        });
    }

    // Render table
    renderTable();
    updateStats();
});

function openModal(riskId = null) {
    const modal = document.getElementById('risk-modal');
    const form = document.getElementById('risk-form');
    const modalTitle = document.getElementById('modal-title');
    
    if (modal && form) {
        if (riskId) {
            // Edit mode
            const risk = risks.find(r => r.id === riskId);
            if (risk) {
                modalTitle.textContent = 'Tahdidni tahrirlash';
                document.getElementById('threat-name').value = risk.threat;
                document.getElementById('consequence').value = risk.consequence;
                document.getElementById('probability').value = risk.probability;
                document.getElementById('consequence-display').textContent = risk.consequence;
                document.getElementById('probability-display').textContent = risk.probability;
                form.dataset.editId = riskId;
            }
        } else {
            // Add mode
            modalTitle.textContent = 'Yangi tahdid qo\'shish';
            form.reset();
            document.getElementById('consequence').value = 3;
            document.getElementById('probability').value = 3;
            document.getElementById('consequence-display').textContent = '3';
            document.getElementById('probability-display').textContent = '3';
            delete form.dataset.editId;
        }
        
        updateRiskMeasure();
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('risk-modal');
    if (modal) {
        modal.classList.remove('active');
        const form = document.getElementById('risk-form');
        if (form) {
            form.reset();
            delete form.dataset.editId;
        }
    }
}

function updateRiskMeasure() {
    const consequence = parseInt(document.getElementById('consequence').value) || 0;
    const probability = parseInt(document.getElementById('probability').value) || 0;
    const riskMeasure = consequence * probability;
    const riskMeasureInput = document.getElementById('risk-measure');
    
    if (riskMeasureInput) {
        riskMeasureInput.value = riskMeasure;
    }

    // Calculate ranking (higher risk measure = lower ranking number = higher priority)
    const allRisks = [...risks];
    allRisks.push({ riskMeasure: riskMeasure });
    allRisks.sort((a, b) => b.riskMeasure - a.riskMeasure);
    const ranking = allRisks.findIndex(r => r.riskMeasure === riskMeasure) + 1;
    
    const rankingInput = document.getElementById('ranking');
    if (rankingInput) {
        rankingInput.value = ranking;
    }
}

function saveRisk() {
    const form = document.getElementById('risk-form');
    const threatName = document.getElementById('threat-name').value;
    const consequence = parseInt(document.getElementById('consequence').value);
    const probability = parseInt(document.getElementById('probability').value);
    const riskMeasure = consequence * probability;

    if (!threatName.trim()) {
        alert('Tahdid nomini kiriting!');
        return;
    }

    const editId = form.dataset.editId;
    
    if (editId) {
        // Edit existing risk
        const risk = risks.find(r => r.id === parseInt(editId));
        if (risk) {
            risk.threat = threatName;
            risk.consequence = consequence;
            risk.probability = probability;
            risk.riskMeasure = riskMeasure;
            calculateRankings();
        }
    } else {
        // Add new risk
        const risk = {
            id: ++riskCounter,
            threat: threatName,
            consequence: consequence,
            probability: probability,
            riskMeasure: riskMeasure,
            ranking: 0
        };
        risks.push(risk);
        calculateRankings();
    }

    renderTable();
    updateStats();
    saveRiskData();
    closeModal();

    if (typeof showNotification === 'function') {
        showNotification(editId ? 'Tahdid yangilandi!' : 'Yangi tahdid qo\'shildi!', 'success');
    }
}

function addRiskFromData(data) {
    const risk = {
        id: ++riskCounter,
        threat: data.threat,
        consequence: data.consequence,
        probability: data.probability,
        riskMeasure: data.riskMeasure,
        ranking: data.ranking
    };
    risks.push(risk);
}

function editRisk(id) {
    openModal(id);
}

function deleteRisk(id) {
    if (confirm('Bu tahdidni o\'chirishni xohlaysizmi?')) {
        risks = risks.filter(r => r.id !== id);
        calculateRankings();
        renderTable();
        updateStats();
        saveRiskData();
        
        if (typeof showNotification === 'function') {
            showNotification('Tahdid o\'chirildi!', 'success');
        }
    }
}

function calculateRankings() {
    // Sort by risk measure (descending)
    risks.sort((a, b) => b.riskMeasure - a.riskMeasure);
    
    // Assign rankings
    risks.forEach((risk, index) => {
        risk.ranking = index + 1;
    });
}

function renderTable() {
    const tbody = document.getElementById('risk-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (risks.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: #999;">Tahdidlar hali qo\'shilmagan</td></tr>';
        return;
    }

    risks.forEach(risk => {
        const row = createTableRow(risk);
        tbody.appendChild(row);
    });
}

function createTableRow(risk) {
    const row = document.createElement('tr');
    
    const riskClass = risk.riskMeasure >= 15 ? 'risk-high' : risk.riskMeasure >= 10 ? 'risk-medium' : 'risk-low';
    
    row.innerHTML = `
        <td>${risk.ranking}</td>
        <td>${escapeHtml(risk.threat)}</td>
        <td>${risk.consequence}</td>
        <td>${risk.probability}</td>
        <td><span class="risk-badge ${riskClass}">${risk.riskMeasure}</span></td>
        <td>${risk.ranking}</td>
        <td>
            <button class="btn-icon" onclick="editRisk(${risk.id})" title="Tahrirlash">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon" onclick="deleteRisk(${risk.id})" title="O'chirish">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    
    return row;
}

function updateStats() {
    const totalRisks = document.getElementById('total-risks');
    const highRisks = document.getElementById('high-risks');
    const avgRisk = document.getElementById('avg-risk');

    if (totalRisks) {
        totalRisks.textContent = risks.length;
    }

    if (highRisks) {
        const highCount = risks.filter(r => r.riskMeasure >= 15).length;
        highRisks.textContent = highCount;
    }

    if (avgRisk) {
        if (risks.length > 0) {
            const avg = risks.reduce((sum, r) => sum + r.riskMeasure, 0) / risks.length;
            avgRisk.textContent = avg.toFixed(1);
        } else {
            avgRisk.textContent = '0';
        }
    }
}

function sortRisks() {
    // Toggle between different sort orders
    if (!risks.length) return;

    // Check current sort state
    const firstRanking = risks[0].ranking;
    const lastRanking = risks[risks.length - 1].ranking;

    if (firstRanking < lastRanking) {
        // Currently ascending, sort descending
        risks.sort((a, b) => b.riskMeasure - a.riskMeasure);
    } else {
        // Currently descending, sort ascending
        risks.sort((a, b) => a.riskMeasure - b.riskMeasure);
    }

    calculateRankings();
    renderTable();
    saveRiskData();
}

function exportTable() {
    if (risks.length === 0) {
        alert('Eksport qilish uchun tahdidlar mavjud emas!');
        return;
    }

    // Create CSV content
    let csv = '№,Tahdidlar,Oqibatlari,Ehtimollik,Risk o\'lchovi,Ranjirlash\n';
    
    risks.forEach(risk => {
        csv += `${risk.ranking},"${risk.threat}",${risk.consequence},${risk.probability},${risk.riskMeasure},${risk.ranking}\n`;
    });

    // Create download link
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `risk_jadvali_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof showNotification === 'function') {
        showNotification('Jadval eksport qilindi!', 'success');
    }
}

function saveRiskData() {
    const data = {
        risks: risks,
        riskCounter: riskCounter,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('risk-table', JSON.stringify(data));
}

function clearAllRisks() {
    risks = [];
    riskCounter = 0;
    localStorage.removeItem('risk-table');
    renderTable();
    updateStats();
    
    if (typeof showNotification === 'function') {
        showNotification('Barcha tahdidlar o\'chirildi!', 'success');
    } else {
        alert('Barcha tahdidlar o\'chirildi!');
    }
}

function loadRiskData() {
    const saved = localStorage.getItem('risk-table');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.risks) {
                risks = data.risks;
            }
            if (data.riskCounter) {
                riskCounter = data.riskCounter;
            }
        } catch (e) {
            console.error('Error loading risk data:', e);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available
window.editRisk = editRisk;
window.deleteRisk = deleteRisk;

