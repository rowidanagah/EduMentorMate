import React, { useEffect, useState } from 'react';
import './TagsInput.css';

export const TagsInput = (props) => {

  const [tags, setTags] = useState([]);
  const addTag = (e) => {
    const tag = e.target.value;
    if (e.code === 'Tab' && tag !== '') {
      setTags((tags) => [...tags, tag]);
      e.target.value = '';

      props.onChange(tags);
    }
  };

  useEffect(() => {
    setTags(props.tags);
  }, [props.tags, setTags]);

  //just send the tags array and run onChange in both add and remove?

  const removeTag = (indexToRemove) => {
    console.log('remove ----------------',indexToRemove)
    const removedTag = tags[indexToRemove];
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    //const updatedTags = tags.slice(indexToRemove,1);
    
    setTags(updatedTags);
    props.onChange('tags', updatedTags, true);
  };

  return (
    <>
      <h6 className='dispaly-6 mt-5 ms-4'>{props.label}</h6>
      <div className=''>
        <ul className='input__list'>
          {tags &&
            tags.map((tag, index) => (
              <li className='input__item' key={index}>
                <span># {tag}</span>

                <i className='input__remove' onClick={() => removeTag(index)} >
                  <i class="fa fa-remove"></i>

                </i>
              </li>
            ))}
        </ul>

        <input
          type='text'
          name="tegs"
          className='input__item w-100'
          placeholder='Press tab to add your tags ...'
          onKeyDown={addTag}
        />
      </div>
    </>
  );
};

export default TagsInput;
