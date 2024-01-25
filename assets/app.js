class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.btn_chat'),
            chatBox: document.querySelector('.chat_box'),
            sendButton: document.querySelector('.send_icon')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }



    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value.trim().toLowerCase();
        if (text1 === '') {
            return;
        }
        if (text1 === "chatbot") {
            this.state = true;
            this.messages.push({ name: "Visitante", message: text1 });
            this.messages.push({ name: "Ste.cBot", message: "Modo Chatbot ativado. Digite 'sair' para desativar." });
            this.updateChatText(chatbox);
            textField.value = '';
        } else if (text1 === "sair") {
            this.state = false;
            this.messages.push({ name: "Visitante", message: text1 });
            this.messages.push({ name: "Ste.cBot", message: "Modo Chatbot desativado. Digite 'chatbot' para reativar." });
            this.updateChatText(chatbox);
            textField.value = '';
        } else {
            let msg1 = { name: "Visitante", message: text1 };
            this.messages.push(msg1);

            let endpoint = 'http://127.0.0.1:5000/predict';
            let name = "Ste.IA";

            if (this.state) {
                endpoint = 'http://127.0.0.1:5000/teste';
                name = "Ste.cBot";
                postMessage("ola mundo", html)
            }

            fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify({ message: text1 }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(r => r.json())
                .then(r => {
                    let msg2 = { name: name, message: r.answer };
                    this.messages.push(msg2);
                    this.updateChatText(chatbox);
                    textField.value = '';
                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.updateChatText(chatbox);
                    textField.value = '';
                });
        }

        // Clear the text field regardless of sending
        textField.value = '';
    }
    updateChatText(chatbox) {
        var html = ''

        this.messages.slice().reverse().forEach(function (item, index) {
            if (item.name === "Ste.IA") {
                html += '<div class="messages_item messages_item--visitor">' + item.message +'</div>'+
                    '<div class="messages_item messages_item--visitor-name">' + item.name + '</div>'
            }
            else if (item.name === "Ste.cBot") {
                html += '<div class="messages_item messages_item--visitor">' + item.message +'</div>'+
                    '<div class="messages_item messages_item--visitor-name">' + item.name + '</div>'
            } else {
                html += '<div class="messages_item messages_item--operator">' + item.message +'</div>'+
                    '<div class="messages_item messages_item--operator-name">' + item.name + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chat_box_body');
        chatmessage.innerHTML = html;
    }
    
}

const chatbox = new Chatbox();
chatbox.display();
