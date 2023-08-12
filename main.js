import { db, app, auth, storage } from "./firebase.mjs"
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, query, onSnapshot, doc, where, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.email;
        //   const uid5 =user;
        //   console.log("curr" , uid5);
        
        var uidname = uid.slice(0, uid.lastIndexOf("@"))
        localStorage.setItem("uidname", JSON.stringify(uidname))
        // console.log("user-name =" ,uidname);

        const q = query(collection(db, "SignupUser"), where("email", "==", user.email));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var num = doc.data().name
                document.getElementById("username").innerText = num
                document.getElementById("sidebarusername").innerText = num
                document.getElementById("sidebarusername1").innerText = num
                //      document.getElementById("usermessage").innerHTML +=
                localStorage.setItem("num", JSON.stringify(num))

            });

        });
        //  var link1 = JSON.parse(localStorage.getItem("link"))
        getDownloadURL(ref(storage, user.email))
            .then(async (url) => {
                const img = document.getElementById('myImg');
                const img2 = document.getElementById('postingsideimage');
                const img3 = document.getElementById('sidebaruserimage');
                const img4 = document.getElementById('sidebaruserimage1');
                img.setAttribute('src', url);
                img2.setAttribute('src', url);
                img3.setAttribute('src', url);
                img4.setAttribute('src', url);
                console.log(url, 'url image user');
            }).catch((error) => {
                // Handle any errors
            });
        const q1 = query(collection(db, "SignupUser"));
        onSnapshot(q1, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDownloadURL(ref(storage, doc.data().email))
                    .then(async (url) => {
                        console.log(url, 'url image user');
                        document.getElementById("usermessage").innerHTML +=
                            `
            <li class="messagesBar__list">
            <img src="${url}" alt="friends">
            <p class="fr-name">${doc.data().name}</p>
            <div class="active"></div>
            
            </li>
            `
                        document.getElementById("messageusers").innerHTML +=
                            `
            <div class="wr__inner-body-pt">
            <img src="${url}" alt="">
            <div class="pt-mm sd">
                <div class="pt-mm-m">${doc.data().name}</div>
                <div class="pt-mm-s">Message</div>
            </div>
            <div class="active"></div>
        </div>
        `

                    }).catch((error) => {
                        // Handle any errors
                    });
            });

        });

        var addpost = document.getElementById("addpost");
        addpost.addEventListener("click", async () => {
            var postinp = document.getElementById("postinput").value;
            var usernameforpost = uidname;

            var newdate = new Date()
            var date = newdate.getDate()
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
             var year = newdate.getFullYear();
            var strTime = date + " " + monthNames[newdate.getMonth()] + " " + year
            getDownloadURL(ref(storage, user.email))

                .then(async (url) => {
                    const img = document.getElementById('myImg');
                    const img2 = document.getElementById('postingsideimage');


                    try {
                        const docRef = await addDoc(collection(db, "post"), {
                            postinp: postinp,
                            usernameforpost: usernameforpost,
                            url: url,
                            strTime:strTime  
                        });
                        console.log("Document written with ID: ", docRef.id);

                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                }).catch((error) => {
                });
        })

        var userpostname = JSON.parse(localStorage.getItem("num"))
        const q2 = query(collection(db, "post"));
        onSnapshot(q2, (querySnapshot) => {
            querySnapshot.forEach((doc) => {

                // return strTime;
                document.getElementById("postcontainer").innerHTML +=
                    `
                    <div class="main-body-friend-post loadComments">
                    <div class="friend-post-container">
                        <div class="friend-post-top">
                            <div class="left">
                                <img src="${doc.data().url}" alt="friend">
                                <div class="title">
                                    <p class="mm">${doc.data().usernameforpost}</p>
                                    <p class="ss">${doc.data().strTime}</p>
                                </div>
                            </div>
                            <div class="right">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div class="friend-post-title">
                            ${doc.data().postinp}
                        </div>
                        <div class="friend-post-info">
                            <div class="info-left">
                                <div class="emj">
                                    <div class="el-12">
                                        <i class="yellow fas fa-grin"></i>
                                        <div class="el-12-info">
                                            <ul>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="el-12">
                                        <i class="red fas fa-heart"></i>
                                        <div class="el-12-info">
                                            <ul>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                                <li>Sarah</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="title">Sarah and 1252 others</div>
                            </div>
                            <div class="info-right">
                                <p>561</p><span>comments</span>
                                <p>1002</p><span>Share</span>
                            </div>
                        </div>
                        <div class="friend-post-actions">
                            <div class="postUT"></div>
                                <div class="actions-cp-12">
                                    <div class="action-col like">
                                        <div class="like-p">
                                            <i class="likeIcon fas fa-thumbs-up"></i>
                                        </div>
                                        <p>Like</p>

                                        <div class="get-emj-12">
                                            <div class="col1"><i class="blue fas fa-thumbs-up"></i></div>
                                            <div class="col1"><i class="yellow fas fa-laugh-beam"></i></div>
                                            <div class="col1"><i class="red fas fa-heart" value="heart"></i></div>
                                            <div class="col1"><i class="yellow fas fa-surprise"></i></div>
                                            <div class="col1"><i class="red fas fa-kiss-wink-heart"></i></div>
                                        </div>
                                    </div>
                                    <div class="action-col comments">
                                        <i class="fas fa-comment"></i>
                                        <p>Comment</p>
                                    </div>
                                    <div class="action-col">
                                        <i class="fas fa-share"></i>
                                        <p>Share</p>
                                    </div>
                                </div>
                            <div class="postUT"></div>
                        </div>
                        <div class="friend-post-comment-section">
                            <div class="friend-post-author-comment">
                                <img src="src/img/profile.jpg" alt="profile">
                                <input type="text" name="" id="" placeholder="Write a comment...">
                            </div>
                            <div class="friend-post-comments">
                                <div class="post-comments">
                                    <div class="post-comment-image">
                                        <img src="src/img/friends3.jpg"  alt="friend">
                                    </div>
                                    <div class="post-comment-cm">
                                       <div class="cm-top">
                                            <div class="cm-title">Denise Rodgers</div>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa velit aperiam earum molestiae sit aut libero dolores, facere voluptas impedit sint repellat animi maxime.</p>
                                       </div>
                                       <div class="cm-bottom">
                                           <div class="cm-like">Like</div>
                                           <div class="cm-reply replyCom">Reply</div>
                                           <div class="cm-time">25m</div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div class="friend-post-comments">
                                <div class="post-comments">
                                    <div class="post-comment-image">
                                        <img src="src/img/friends3.jpg"  alt="friend">
                                    </div>
                                    <div class="post-comment-cm">
                                       <div class="cm-top">
                                            <div class="cm-title">Denise Rodgers</div>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa velit aperiam earum molestiae sit aut libero dolores, facere voluptas impedit sint repellat animi maxime.</p>
                                       </div>
                                       <div class="cm-bottom">
                                           <div class="cm-like">Like</div>
                                           <div class="cm-reply replyCom">Reply</div>
                                           <div class="cm-time">25m</div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div class="friend-post-comments">
                                <div class="post-comments">
                                    <div class="post-comment-image">
                                        <img src="src/img/friends2.jpg"  alt="friend">
                                    </div>
                                    <div class="post-comment-cm">
                                       <div class="cm-top">
                                            <div class="cm-title">Tom Miller</div>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                       </div>
                                       <div class="cm-bottom">
                                           <div class="cm-like">Like</div>
                                           <div class="cm-reply replyCom">Reply</div>
                                           <div class="cm-time">25m</div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             `

            });

        });

    } else {
        // User is signed out
        window.location.href = "Signup.html"
        // ...
    }
});


var logout = document.getElementById("userlogout");
logout.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "./Login.html"
    }).catch((error) => {
        // An error happened.
    });
});


document.getElementById("userprofile").addEventListener("click" , ()=>{
window.location.href = "./profile.html"
})
// start()