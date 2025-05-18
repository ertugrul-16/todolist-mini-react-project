import React from "react";
import { useState } from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useRef } from 'react';

// tüm verileri bir state de depolayalım ki  footer tarafında buttonlarla bu  listelenen
// elemanları ayrıştırmak istersek rahatça kullanabiliriz 
// burada tekli versiyonunu oluştututuz contect componentinde de hepsinin tutulduğu halini 
// tutarız 

 function List({ tasks, setTasks,openCloseBtn,footerBtnControl}) {


  
  const handleCheckboxChange = (index) => {
    // bu fonksiyon sayesinde checked olan veriler tekrar düzeltilip listelenir 
    const updatedTasks = [...tasks]; // mevcut listeyi kopyala
    updatedTasks[index].checked = !updatedTasks[index].checked; // ilgili checkbox'ı tersle
    setTasks(updatedTasks); // güncellenmiş listeyi ata
  };


  const handleDelete = (index) => {
  const updatedTasks = tasks.filter((_, i) => i !== index); // bu index haricindeki tüm verilerin toplamını bu değişkene at demek  _ --> bu parametre kullanılmayacak demek 
  // o anda dolaşılan o index e ait olan veri haricinde tüm verileri al ve b değişkende tut
  setTasks(updatedTasks);// daha sonra filtrelenerek saklanmış bu veri topluluğunu tasks veri yığına 
  // atarak eskisinin üzerine atama yaparak güncelle
};



  return (
    <div>
      <div className="flex-content">
        <ul>
            {
          footerBtnControl === "All" && openCloseBtn &&
          tasks.map((taskObj, index) => (
            <li key={index} className="flex-content-element">
              <input
                type="checkbox"
                checked={taskObj.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <p
                style={{
                  textDecoration: taskObj.checked ? "line-through" : "none",
                  color: taskObj.checked ? "gray" : "black"
                }}
              >
                {taskObj.task}
              </p>
              <button 
              className="ghost-btn icon-btn"
              onClick={()=>handleDelete(index)}
              >
                <FontAwesomeIcon className="icon-btn" icon={faXmark} />
              </button>
            </li>
          ))}

          
          {
          footerBtnControl === "Active" && openCloseBtn &&
          tasks.map((taskObj, index) => (
            taskObj.checked === false &&
            <li key={index} className="flex-content-element">
              <input
                type="checkbox"
                checked={taskObj.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <p
                style={{
                  textDecoration: taskObj.checked ? "line-through" : "none",
                  color: taskObj.checked ? "gray" : "black"
                }}
              >
                {taskObj.task}
              </p>
               <button 
              className="ghost-btn icon-btn"
              onClick={()=>handleDelete(index)}
              >
                <FontAwesomeIcon className="icon-btn" icon={faXmark} />
              </button>
            </li>
          ))}

          
          {
          footerBtnControl === "Completed" && openCloseBtn &&
          tasks.map((taskObj, index) => (
            taskObj.checked === true &&
            <li key={index} className="flex-content-element">
              <input
                type="checkbox"
                checked={taskObj.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <p
                style={{
                  textDecoration: taskObj.checked ? "line-through" : "none",
                  color: taskObj.checked ? "gray" : "black"
                }}
              >
                {taskObj.task}
              </p>
               <button 
              className="ghost-btn icon-btn"
              onClick={()=>handleDelete(index)}
              >
                <FontAwesomeIcon className="icon-btn" icon={faXmark} />
              </button>
            </li>
          ))}
                    
        </ul>
      </div>
    </div>
  );
}


export default List;
