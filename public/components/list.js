 //List Class
            var list = function (listid, listname, cards) {

                //data fields
                this.listname = listname;
                this.cards = cards;
                this.id = listid;

                //reverses cards
                this.reverseList = function () {
                    this.cards.reverse();
                }

                //renders list along with its cards
                this.render = function () {

                    var listdiv = "<h3 class='listHeader'>" + this.listname + "</h3>";
                    listdiv += "<ul class='list' id='" + this.id + "' ondrop='drop(event)' ondragover='allowDrop(event)'>";

                    for (let i = 0; i < cards.length; i++) {
                        // console.log(cards[i].render());
                        listdiv += cards[i].render();
                    }

                    listdiv += "</ul>";

                    return listdiv;
                }


            }