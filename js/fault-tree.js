// Fault Tree Analysis Interactive Functionality

let treeNodes = [];
let nodeCounter = 0;

document.addEventListener('DOMContentLoaded', function() {
    const addGateBtn = document.getElementById('add-gate');
    const addEventBtn = document.getElementById('add-event');
    const clearBtn = document.getElementById('clear-tree');
    const calculateBtn = document.getElementById('calculate-probability');

    // Load saved data
    loadTreeData();

    // Add gate
    if (addGateBtn) {
        addGateBtn.addEventListener('click', function() {
            const gateType = prompt('Mantiqiy element turi (AND yoki OR):', 'AND');
            if (gateType && (gateType.toUpperCase() === 'AND' || gateType.toUpperCase() === 'OR')) {
                addGateNode(gateType.toUpperCase());
            } else if (gateType) {
                alert('Faqat AND yoki OR kiriting!');
            }
        });
    }

    // Add event
    if (addEventBtn) {
        addEventBtn.addEventListener('click', function() {
            const eventText = prompt('Voqea nomini kiriting:');
            if (eventText && eventText.trim()) {
                addEventNode(eventText.trim());
            }
        });
    }

    // Clear tree
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Barcha daraxtni o\'chirishni xohlaysizmi?')) {
                clearTree();
            }
        });
    }

    // Calculate probability
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            calculateProbabilities();
        });
    }

    // Render initial tree
    renderTree();
});

function addGateNode(gateType) {
    const node = {
        id: ++nodeCounter,
        type: 'gate',
        gateType: gateType,
        text: gateType,
        parentId: null,
        children: [],
        probability: null
    };
    treeNodes.push(node);
    renderTree();
    saveTreeData();
}

function addEventNode(eventText) {
    const node = {
        id: ++nodeCounter,
        type: 'event',
        text: eventText,
        parentId: null,
        probability: null
    };
    treeNodes.push(node);
    renderTree();
    saveTreeData();
}

function editTopEvent() {
    const input = document.getElementById('top-event-input');
    if (input) {
        input.focus();
        input.select();
    }
}

function saveTopEvent() {
    saveTreeData();
}

function editNode(button) {
    const nodeElement = button.closest('.tree-node');
    const nodeId = parseInt(nodeElement.dataset.nodeId);
    const node = treeNodes.find(n => n.id === nodeId);
    
    if (node) {
        if (node.type === 'gate') {
            const newType = prompt('Mantiqiy element turi (AND yoki OR):', node.gateType);
            if (newType && (newType.toUpperCase() === 'AND' || newType.toUpperCase() === 'OR')) {
                node.gateType = newType.toUpperCase();
                node.text = newType.toUpperCase();
                renderTree();
                saveTreeData();
            }
        } else {
            const newText = prompt('Voqea nomini tahrirlang:', node.text);
            if (newText && newText.trim()) {
                node.text = newText.trim();
                renderTree();
                saveTreeData();
            }
        }
    }
}

function deleteNode(button) {
    const nodeElement = button.closest('.tree-node');
    const nodeId = parseInt(nodeElement.dataset.nodeId);
    
    if (confirm('Bu elementni o\'chirishni xohlaysizmi?')) {
        deleteNodeRecursive(nodeId);
        renderTree();
        saveTreeData();
    }
}

function deleteNodeRecursive(nodeId) {
    treeNodes = treeNodes.filter(n => {
        if (n.id === nodeId) {
            return false;
        }
        if (n.parentId === nodeId) {
            deleteNodeRecursive(n.id);
            return false;
        }
        return true;
    });
}

function setNodeProbability(nodeId, probability) {
    const node = treeNodes.find(n => n.id === nodeId);
    if (node) {
        const probValue = parseFloat(probability);
        if (!isNaN(probValue) && probValue >= 0 && probValue <= 1) {
            node.probability = probValue;
            saveTreeData();
            // Update display without full re-render
            const nodeElement = document.querySelector(`[data-node-id="${nodeId}"]`);
            if (nodeElement) {
                const display = nodeElement.querySelector('.probability-display');
                if (display) {
                    display.textContent = `(${(probValue * 100).toFixed(0)}%)`;
                }
            }
        } else {
            alert('Ehtimollik 0 dan 1 gacha bo\'lishi kerak!');
        }
    }
}

function renderTree() {
    const treeRoot = document.getElementById('tree-root');
    if (!treeRoot) return;

    // Clear existing nodes except top event
    const topEvent = treeRoot.querySelector('.top-event');
    treeRoot.innerHTML = '';
    
    if (topEvent) {
        // Create wrapper for top event with connection line
        const topWrapper = document.createElement('div');
        topWrapper.className = 'tree-level top-level';
        topWrapper.appendChild(topEvent);
        treeRoot.appendChild(topWrapper);
    }

    // Separate gates and events
    const gates = treeNodes.filter(n => n.type === 'gate');
    const events = treeNodes.filter(n => n.type === 'event');

    // Render gates level
    if (gates.length > 0) {
        const gateLevel = document.createElement('div');
        gateLevel.className = 'tree-level gate-level';
        
        // Add connection line from top event
        const connector = document.createElement('div');
        connector.className = 'tree-connector';
        gateLevel.appendChild(connector);
        
        const gateContainer = document.createElement('div');
        gateContainer.className = 'tree-nodes-container';
        
        gates.forEach(gate => {
            const nodeElement = createNodeElement(gate);
            gateContainer.appendChild(nodeElement);
        });
        
        gateLevel.appendChild(gateContainer);
        treeRoot.appendChild(gateLevel);
    }

    // Render events level
    if (events.length > 0) {
        const eventLevel = document.createElement('div');
        eventLevel.className = 'tree-level event-level';
        
        // Add connection line from gates
        if (gates.length > 0) {
            const connector = document.createElement('div');
            connector.className = 'tree-connector';
            eventLevel.appendChild(connector);
        }
        
        const eventContainer = document.createElement('div');
        eventContainer.className = 'tree-nodes-container';
        
        events.forEach(event => {
            const nodeElement = createNodeElement(event);
            eventContainer.appendChild(nodeElement);
        });
        
        eventLevel.appendChild(eventContainer);
        treeRoot.appendChild(eventLevel);
    }

    // If no nodes, show message
    if (treeNodes.length === 0) {
        const message = document.createElement('div');
        message.style.cssText = 'text-align: center; color: #999; padding: 2rem;';
        message.textContent = 'Daraxt elementlarini qo\'shish uchun tugmalardan foydalaning';
        treeRoot.appendChild(message);
    }
}

function createNodeElement(node) {
    const nodeDiv = document.createElement('div');
    nodeDiv.className = `tree-node ${node.type === 'gate' ? 'gate-node' : 'event-node'}`;
    nodeDiv.dataset.nodeId = node.id;

    let inputHtml = '';
    if (node.type === 'gate') {
        inputHtml = `<input type="text" class="node-input" value="${escapeHtml(node.text)}" readonly>`;
    } else {
        inputHtml = `<input type="text" class="node-input" value="${escapeHtml(node.text)}" readonly>`;
    }

    // Format probability display
    let probValue = '';
    let probDisplay = '';
    if (node.probability !== null && node.probability !== undefined) {
        probValue = node.probability;
        probDisplay = `(${(node.probability * 100).toFixed(0)}%)`;
    }

    nodeDiv.innerHTML = `
        ${inputHtml}
        <div class="node-controls">
            <button class="btn-icon" onclick="editNode(this)" title="Tahrirlash">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon" onclick="deleteNode(this)" title="O'chirish">
                <i class="fas fa-times"></i>
            </button>
        </div>
        ${node.type === 'event' ? `
            <div class="probability-input-group">
                <label style="font-size: 0.8rem; display: block; margin-bottom: 0.3rem;">Ehtimollik (0-1):</label>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="number" 
                           class="probability-input"
                           step="0.01" 
                           min="0" 
                           max="1" 
                           value="${probValue}" 
                           placeholder="0.00"
                           onchange="setNodeProbability(${node.id}, this.value)"
                           oninput="updateProbabilityDisplay(this, ${node.id})"
                           style="width: 100px; padding: 0.4rem; border: 2px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                    <span class="probability-display" style="font-size: 0.85rem; color: #666; font-weight: 500;">${probDisplay}</span>
                </div>
            </div>
        ` : ''}
    `;

    return nodeDiv;
}

function updateProbabilityDisplay(input, nodeId) {
    const value = parseFloat(input.value);
    const display = input.parentElement.querySelector('.probability-display');
    if (display) {
        if (!isNaN(value) && value >= 0 && value <= 1) {
            display.textContent = `(${(value * 100).toFixed(0)}%)`;
        } else {
            display.textContent = '';
        }
    }
}

function calculateProbabilities() {
    const panel = document.getElementById('probability-panel');
    const results = document.getElementById('probability-results');
    
    if (!panel || !results) return;

    const gates = treeNodes.filter(n => n.type === 'gate');
    const events = treeNodes.filter(n => n.type === 'event');
    
    // Check if events have probabilities
    const eventsWithProb = events.filter(e => e.probability !== null && e.probability !== undefined);
    
    if (eventsWithProb.length === 0) {
        results.innerHTML = '<p style="color: #999; padding: 1rem; text-align: center;">Ehtimolliklarni hisoblash uchun voqealarga ehtimollik qiymatlarini kiriting (0-1 orasida).</p>';
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }

    let calculations = [];
    let totalProbability = 0;

    // If there are gates, calculate for each gate
    if (gates.length > 0) {
        gates.forEach(gate => {
            // For simplicity, assume all events are connected to the gate
            // In a real fault tree, you'd have parent-child relationships
            if (eventsWithProb.length > 0) {
                let gateProb = 0;
                if (gate.gateType === 'AND') {
                    // AND: multiply all probabilities
                    gateProb = eventsWithProb.reduce((acc, event) => {
                        return acc * event.probability;
                    }, 1);
                } else {
                    // OR: 1 - product of (1 - p)
                    gateProb = 1 - eventsWithProb.reduce((acc, event) => {
                        return acc * (1 - event.probability);
                    }, 1);
                }
                
                calculations.push({
                    name: gate.text,
                    probability: gateProb,
                    type: gate.gateType,
                    events: eventsWithProb.map(e => e.text).join(', ')
                });
            }
        });
        
        // Total probability is the result from gates
        if (calculations.length > 0) {
            // If multiple gates, use OR logic (any gate can cause top event)
            if (calculations.length === 1) {
                totalProbability = calculations[0].probability;
            } else {
                // Multiple gates with OR logic
                totalProbability = 1 - calculations.reduce((acc, calc) => {
                    return acc * (1 - calc.probability);
                }, 1);
            }
        }
    } else {
        // No gates, calculate directly from events
        if (eventsWithProb.length > 0) {
            // Assume events are connected with AND (all must occur)
            totalProbability = eventsWithProb.reduce((acc, event) => {
                return acc * event.probability;
            }, 1);
            
            calculations.push({
                name: 'Barcha voqealar (AND)',
                probability: totalProbability,
                type: 'AND',
                events: eventsWithProb.map(e => e.text).join(', ')
            });
        }
    }

    // Display results
    let html = '<div style="background: #f0f7ff; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--primary-color);">';
    html += '<div style="margin-bottom: 0.5rem;"><strong>Yakuniy hodisa ehtimolligi:</strong></div>';
    html += `<div style="font-size: 2rem; font-weight: bold; color: var(--primary-color);">${(totalProbability * 100).toFixed(2)}%</div>`;
    html += `<div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">${(totalProbability).toFixed(4)} (0-1 shkala)</div>`;
    html += '</div>';
    
    if (calculations.length > 0) {
        html += '<h4 style="margin-bottom: 1rem; color: var(--dark-color);">Hisob-kitoblar:</h4>';
        html += '<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">';
        html += '<thead><tr style="background: var(--light-color);">';
        html += '<th style="padding: 0.75rem; border: 1px solid #ddd; text-align: left;">Element</th>';
        html += '<th style="padding: 0.75rem; border: 1px solid #ddd; text-align: left;">Turi</th>';
        html += '<th style="padding: 0.75rem; border: 1px solid #ddd; text-align: left;">Ehtimollik</th>';
        html += '<th style="padding: 0.75rem; border: 1px solid #ddd; text-align: left;">Voqealar</th>';
        html += '</tr></thead><tbody>';
        
        calculations.forEach(calc => {
            html += `<tr>
                <td style="padding: 0.75rem; border: 1px solid #ddd;">${escapeHtml(calc.name)}</td>
                <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>${calc.type}</strong></td>
                <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>${(calc.probability * 100).toFixed(2)}%</strong></td>
                <td style="padding: 0.75rem; border: 1px solid #ddd; font-size: 0.9rem; color: #666;">${escapeHtml(calc.events)}</td>
            </tr>`;
        });
        
        html += '</tbody></table>';
    }
    
    // Show individual events
    if (eventsWithProb.length > 0) {
        html += '<h4 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--dark-color);">Voqealar:</h4>';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">';
        eventsWithProb.forEach(event => {
            html += `<div style="background: #f9f9f9; padding: 0.75rem; border-radius: 5px; border-left: 3px solid var(--info-color);">`;
            html += `<div style="font-weight: 600; margin-bottom: 0.25rem;">${escapeHtml(event.text)}</div>`;
            html += `<div style="font-size: 0.9rem; color: #666;">${(event.probability * 100).toFixed(0)}% (${event.probability.toFixed(3)})</div>`;
            html += `</div>`;
        });
        html += '</div>';
    }
    
    results.innerHTML = html;
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearTree() {
    treeNodes = [];
    nodeCounter = 0;
    renderTree();
    saveTreeData();
}

function saveTreeData() {
    const topEventInput = document.querySelector('.top-event .node-input');
    const data = {
        topEvent: topEventInput ? topEventInput.value : 'Yakuniy hodisa',
        nodes: treeNodes,
        nodeCounter: nodeCounter,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('fault-tree', JSON.stringify(data));
}

function loadTreeData() {
    const saved = localStorage.getItem('fault-tree');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.topEvent) {
                const topEventInput = document.querySelector('.top-event .node-input');
                if (topEventInput) {
                    topEventInput.value = data.topEvent;
                }
            }
            if (data.nodes) {
                treeNodes = data.nodes;
            }
            if (data.nodeCounter) {
                nodeCounter = data.nodeCounter;
            }
        } catch (e) {
            console.error('Error loading tree data:', e);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available
window.editNode = editNode;
window.deleteNode = deleteNode;
window.setNodeProbability = setNodeProbability;
window.updateProbabilityDisplay = updateProbabilityDisplay;
window.editTopEvent = editTopEvent;
window.saveTopEvent = saveTopEvent;

