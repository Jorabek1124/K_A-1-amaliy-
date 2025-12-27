// Butterfly (Galstuk-Babochka) Diagram Interactive Functionality

let causes = [];
let consequences = [];

document.addEventListener('DOMContentLoaded', function() {
    const addCauseBtn = document.getElementById('add-cause');
    const addConsequenceBtn = document.getElementById('add-consequence');
    const clearBtn = document.getElementById('clear-butterfly');
    const saveBtn = document.getElementById('save-butterfly');
    const eventInput = document.getElementById('event-input');

    // Load saved data
    loadButterflyData();

    // Add cause
    if (addCauseBtn) {
        addCauseBtn.addEventListener('click', function() {
            const causeText = prompt('Sababni kiriting:');
            if (causeText && causeText.trim()) {
                addCause(causeText.trim());
            }
        });
    }

    // Add consequence
    if (addConsequenceBtn) {
        addConsequenceBtn.addEventListener('click', function() {
            const consequenceText = prompt('Oqibatni kiriting:');
            if (consequenceText && consequenceText.trim()) {
                addConsequence(consequenceText.trim());
            }
        });
    }

    // Clear all
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Barcha ma\'lumotlarni o\'chirishni xohlaysizmi?')) {
                clearButterfly();
            }
        });
    }

    // Save
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            saveButterflyData();
            if (typeof showNotification === 'function') {
                showNotification('Ma\'lumotlar saqlandi!', 'success');
            } else {
                alert('Ma\'lumotlar saqlandi!');
            }
        });
    }

    // Save event name on change
    if (eventInput) {
        eventInput.addEventListener('blur', function() {
            saveButterflyData();
        });
    }

    // Render initial data
    renderButterfly();
});

function addCause(text) {
    const cause = {
        id: Date.now(),
        text: text
    };
    causes.push(cause);
    renderButterfly();
    saveButterflyData();
}

function addConsequence(text) {
    const consequence = {
        id: Date.now(),
        text: text
    };
    consequences.push(consequence);
    renderButterfly();
    saveButterflyData();
}

function deleteCause(id) {
    causes = causes.filter(c => c.id !== id);
    renderButterfly();
    saveButterflyData();
}

function deleteConsequence(id) {
    consequences = consequences.filter(c => c.id !== id);
    renderButterfly();
    saveButterflyData();
}

function editCause(id) {
    const cause = causes.find(c => c.id === id);
    if (cause) {
        const newText = prompt('Sababni tahrirlang:', cause.text);
        if (newText && newText.trim()) {
            cause.text = newText.trim();
            renderButterfly();
            saveButterflyData();
        }
    }
}

function editConsequence(id) {
    const consequence = consequences.find(c => c.id === id);
    if (consequence) {
        const newText = prompt('Oqibatni tahrirlang:', consequence.text);
        if (newText && newText.trim()) {
            consequence.text = newText.trim();
            renderButterfly();
            saveButterflyData();
        }
    }
}

function renderButterfly() {
    const causesList = document.getElementById('causes-list');
    const consequencesList = document.getElementById('consequences-list');

    // Render causes
    if (causesList) {
        causesList.innerHTML = '';
        if (causes.length === 0) {
            causesList.innerHTML = '<p style="color: #999; text-align: center; width: 100%;">Sabablar hali qo\'shilmagan</p>';
        } else {
            causes.forEach(cause => {
                const causeItem = createCauseItem(cause);
                causesList.appendChild(causeItem);
            });
        }
    }

    // Render consequences
    if (consequencesList) {
        consequencesList.innerHTML = '';
        if (consequences.length === 0) {
            consequencesList.innerHTML = '<p style="color: #999; text-align: center; width: 100%;">Oqibatlar hali qo\'shilmagan</p>';
        } else {
            consequences.forEach(consequence => {
                const consequenceItem = createConsequenceItem(consequence);
                consequencesList.appendChild(consequenceItem);
            });
        }
    }
}

function createCauseItem(cause) {
    const item = document.createElement('div');
    item.className = 'cause-item';
    item.innerHTML = `
        <div class="item-text">${escapeHtml(cause.text)}</div>
        <div class="item-controls">
            <button class="btn-icon" onclick="editCause(${cause.id})" title="Tahrirlash">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon" onclick="deleteCause(${cause.id})" title="O'chirish">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    return item;
}

function createConsequenceItem(consequence) {
    const item = document.createElement('div');
    item.className = 'consequence-item';
    item.innerHTML = `
        <div class="item-text">${escapeHtml(consequence.text)}</div>
        <div class="item-controls">
            <button class="btn-icon" onclick="editConsequence(${consequence.id})" title="Tahrirlash">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon" onclick="deleteConsequence(${consequence.id})" title="O'chirish">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    return item;
}

function clearButterfly() {
    causes = [];
    consequences = [];
    const eventInput = document.getElementById('event-input');
    if (eventInput) {
        eventInput.value = 'Xavfli hodisa';
    }
    renderButterfly();
    saveButterflyData();
}

function saveButterflyData() {
    const eventInput = document.getElementById('event-input');
    const data = {
        event: eventInput ? eventInput.value : 'Xavfli hodisa',
        causes: causes,
        consequences: consequences,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('butterfly-diagram', JSON.stringify(data));
}

function loadButterflyData() {
    const saved = localStorage.getItem('butterfly-diagram');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.event) {
                const eventInput = document.getElementById('event-input');
                if (eventInput) {
                    eventInput.value = data.event;
                }
            }
            if (data.causes) {
                causes = data.causes;
            }
            if (data.consequences) {
                consequences = data.consequences;
            }
        } catch (e) {
            console.error('Error loading butterfly data:', e);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available for onclick handlers
window.editCause = editCause;
window.deleteCause = deleteCause;
window.editConsequence = editConsequence;
window.deleteConsequence = deleteConsequence;

