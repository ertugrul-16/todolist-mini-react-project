import React, { use } from "react";
import { useState } from "react";
import './index.css'; 
import Input from "./input";
import List from "./List";
import Footer from "./footer";

// ana listelenecek veriler bu componenetteki state de depolanması lazım en sağlıklısı böyle olur 


function Content(){
    
    const [tasks,setTasks] = useState([]); // artık task verileri hem checked hem de içerik barındırıyor 
    // şimdi butonlara göre listelenecek elemanların kontrolünü yapmada üstelenecek 2 farklı
    // state tanımı yapmalıyız...

    // 1. si tüm liste için input componentteki ok iconuna tıkladığımızda  listelemeyi
    // açıp kapayan sistemde kullanılacak  state mizi tanımlayalım 

    const [openCloseBtn,setOpenCloseBtn] = useState({is_open : true}); // ilk başta açık olsun tabi
    // kullanımı --> setOpenCloseBtn({ is_open: false });  böyle olacak 

    // şimdi footer deki buttonları yönetmeye gelelim

    const [footerBtnControl,setFooterBtnControl] = useState("All");
    // all --> hepsi , active --> hala yapılmamış olanlar , copleted --> yapılmış olanlar 


    // inputtan gelen veriler buradaki tasks a kaydedilsin istiyorum 
    // bu yüzden buradaki state yi Input alt component e props olarak yolladım
    console.log(tasks);
    return(
        <div className="main-div">
            <div className="todos-tablo">
                <h1>TODOS</h1>
            </div>
            <Input 
            tasks={tasks} 
            setTasks={setTasks} 
            openCloseBtn={openCloseBtn} 
            setOpenCloseBtn={setOpenCloseBtn} 
            />
            <List 
            tasks={tasks} 
            setTasks={setTasks}
            openCloseBtn={openCloseBtn} 
            footerBtnControl={footerBtnControl}
            />
            <Footer
            tasks={tasks} 
            setTasks={setTasks} 
            openCloseBtn={openCloseBtn} 
            setOpenCloseBtn={setOpenCloseBtn}
            footerBtnControl={footerBtnControl}
            setFooterBtnControl={setFooterBtnControl}
            />
        </div>
    );
}


export default Content;