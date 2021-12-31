 //Card Class
            var card = function (cardid, title, text, deadline) {

                this.id = cardid;
                this.title = title;
                this.text = text;
                this.deadline = deadline;


                //renders cards
                this.render = function () {

                    var carddiv =
                            "<li class='card' id='" + this.id + "' draggable='true' ondragstart='drag(event)' ondragover='allowDrop(event)' >" +
                            "<div class='title' ondragover='dontAllowDrop(event)'>" + this.title + "</div><br>" +
                            "<div ondragover='dontAllowDrop(event)'>" + this.text + "</div><br>" +
                            "<div class='deadline' ondragover='dontAllowDrop(event)'>" + "deadline :" + this.deadline + "</div><br>" +
                            "<button type='button' data-id='" + this.id + "' data-title='" + this.title + "' data-text='" + this.text + "' data-deadline='" + this.deadline + "' onclick='edit_card(this)'>" + "Edit" + "</button>" +
                            "<button type='button' data-id='" + this.id + "' data-title='" + this.title + "' data-text='" + this.text + "' data-deadline='" + this.deadline + "' onclick='add_new_card(this)'>" + "Add" + "</button>" +
                            "<button type='button' data-id='" + this.id + "' data-title='" + this.title + "' data-text='" + this.text + "' data-deadline='" + this.deadline + "' onclick='delete_card(this)'>" + "Delete" + "</button><br>" +
                            "</li>";


                    return carddiv;
                }

            }