export default {
  id: 'quote-form-chat',
  name: 'Quote Form — Conversational',
  category: 'Form',
  description: 'Chat-style guided form — one question at a time with animated transitions',
  html: `
    <section class="qf-chat">
      <div class="qf-chat__inner">
        <div class="qf-chat__header">
          <div class="qf-chat__avatar">T</div>
          <div>
            <div class="qf-chat__agent-name">Tryg Rådgiver</div>
            <div class="qf-chat__status"><span class="qf-chat__dot"></span>Online nu</div>
          </div>
        </div>
        <div class="qf-chat__body" id="chatBody">
          <!-- Messages injected by JS -->
        </div>
        <div class="qf-chat__input-area" id="chatInputArea">
          <!-- Input injected by JS -->
        </div>
      </div>
    </section>`,
  css: `
    .qf-chat {
      padding: var(--spacing-xl) var(--spacing-lg);
      background: #f0f2f5;
    }
    .qf-chat__inner {
      max-width: 520px; margin: 0 auto;
      background: #fff; border-radius: var(--radius-card);
      overflow: hidden; box-shadow: 0 4px 32px rgba(0,0,0,0.1);
      display: flex; flex-direction: column; height: 600px;
    }
    .qf-chat__header {
      display: flex; align-items: center; gap: 12px;
      padding: 16px 20px; background: var(--color-primary); color: #fff;
    }
    .qf-chat__avatar {
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(255,255,255,0.3); font-weight: 700; font-size: 1.125rem;
      display: flex; align-items: center; justify-content: center;
    }
    .qf-chat__agent-name { font-weight: 700; font-size: 0.9375rem; }
    .qf-chat__status { font-size: 0.75rem; opacity: 0.9; display: flex; align-items: center; gap: 5px; }
    .qf-chat__dot {
      width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block;
    }
    .qf-chat__body {
      flex: 1; overflow-y: auto; padding: 20px 16px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .qf-chat__msg {
      max-width: 80%; animation: qfChatIn 0.3s ease;
    }
    .qf-chat__msg--bot { align-self: flex-start; }
    .qf-chat__msg--user { align-self: flex-end; }
    .qf-chat__bubble {
      padding: 11px 15px; border-radius: 18px; font-size: 0.9375rem; line-height: 1.5;
    }
    .qf-chat__msg--bot .qf-chat__bubble {
      background: #f0f2f5; border-bottom-left-radius: 4px; color: var(--color-text);
    }
    .qf-chat__msg--user .qf-chat__bubble {
      background: var(--color-primary); color: #fff; border-bottom-right-radius: 4px;
    }
    .qf-chat__choices {
      display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; align-self: flex-start;
      animation: qfChatIn 0.3s ease;
    }
    .qf-chat__choice {
      padding: 8px 16px; border: 1.5px solid var(--color-primary);
      border-radius: 20px; background: #fff; color: var(--color-primary);
      font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: all 0.15s;
    }
    .qf-chat__choice:hover { background: var(--color-primary); color: #fff; }
    .qf-chat__input-area {
      border-top: 1px solid var(--color-border); padding: 12px 16px;
      display: flex; gap: 8px;
    }
    .qf-chat__text-input {
      flex: 1; padding: 10px 14px;
      border: 1.5px solid var(--color-border); border-radius: 24px;
      font-size: 0.9375rem; font-family: var(--font-body); outline: none;
      transition: border-color 0.2s;
    }
    .qf-chat__text-input:focus { border-color: var(--color-primary); }
    .qf-chat__send {
      width: 42px; height: 42px; border-radius: 50%;
      background: var(--color-primary); color: #fff; border: none;
      cursor: pointer; font-size: 1.125rem; display: flex;
      align-items: center; justify-content: center; flex-shrink: 0;
      transition: background 0.15s;
    }
    .qf-chat__send:hover { background: var(--color-primary-dark); }
    @keyframes qfChatIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 600px) {
      .qf-chat { padding: var(--spacing-lg) var(--spacing-md); }
      .qf-chat__inner { height: 520px; }
    }`,
  js: `
    (function() {
      var body = document.getElementById('chatBody');
      var inputArea = document.getElementById('chatInputArea');
      if (!body || !inputArea) return;

      var steps = [
        { type: 'bot', text: 'Hej! 👋 Jeg hjælper dig med at finde den rigtige forsikring. Hvad vil du forsikre?' },
        { type: 'choices', key: 'product', choices: ['🚗 Bil', '🏠 Bolig', '🌍 Rejse', '📦 Indbo'] },
        { type: 'bot', text: 'Godt valg! Hvad er dit navn?' },
        { type: 'input', key: 'name', placeholder: 'Dit fulde navn…', inputType: 'text' },
        { type: 'bot', text: 'Super! Hvad er dit telefonnummer, så vi kan ringe dig op?' },
        { type: 'input', key: 'phone', placeholder: '+45 12 34 56 78', inputType: 'tel' },
        { type: 'bot', text: 'Perfekt! Vi ringer dig op inden for 24 timer med dit personlige tilbud. Tak! 🎉' }
      ];

      var answers = {};
      var stepIndex = 0;

      function addMsg(type, text) {
        var div = document.createElement('div');
        div.className = 'qf-chat__msg qf-chat__msg--' + type;
        var bubble = document.createElement('div');
        bubble.className = 'qf-chat__bubble';
        bubble.textContent = text;
        div.appendChild(bubble);
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
        return div;
      }

      function showChoices(choices, key) {
        var wrap = document.createElement('div');
        wrap.className = 'qf-chat__choices';
        choices.forEach(function(c) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'qf-chat__choice';
          btn.textContent = c;
          btn.addEventListener('click', function() {
            answers[key] = c;
            wrap.remove();
            addMsg('user', c);
            stepIndex++;
            setTimeout(nextStep, 400);
          });
          wrap.appendChild(btn);
        });
        body.appendChild(wrap);
        body.scrollTop = body.scrollHeight;
      }

      function showInput(key, placeholder, inputType) {
        inputArea.innerHTML = '';
        var inp = document.createElement('input');
        inp.type = inputType || 'text';
        inp.placeholder = placeholder;
        inp.className = 'qf-chat__text-input';
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'qf-chat__send';
        btn.innerHTML = '&#10148;';
        function submit() {
          if (!inp.value.trim()) return;
          answers[key] = inp.value.trim();
          addMsg('user', inp.value.trim());
          inputArea.innerHTML = '';
          stepIndex++;
          setTimeout(nextStep, 400);
        }
        btn.addEventListener('click', submit);
        inp.addEventListener('keydown', function(e) { if (e.key === 'Enter') submit(); });
        inputArea.appendChild(inp);
        inputArea.appendChild(btn);
        inp.focus();
      }

      function nextStep() {
        if (stepIndex >= steps.length) return;
        var s = steps[stepIndex];
        if (s.type === 'bot') {
          addMsg('bot', s.text);
          stepIndex++;
          if (stepIndex < steps.length) setTimeout(nextStep, 600);
        } else if (s.type === 'choices') {
          showChoices(s.choices, s.key);
        } else if (s.type === 'input') {
          showInput(s.key, s.placeholder, s.inputType);
        }
      }

      setTimeout(nextStep, 300);
    })();`
};
