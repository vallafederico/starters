import {Select, Stack, Grid, Label, TextInput, TabList, Tab, TabPanel} from '@sanity/ui'
import {FormField, set, unset} from 'sanity'
import React, {useEffect, useState, useCallback} from 'react'
import {AiOutlineLink} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import client from '../utils/client'

const LinkTypeSelect = (props) => {
  const {type, value = '', onChange, elementProps} = props

  console.log(value)

  const [id, setId] = useState(false)
  const [data, setData] = useState([])
  const [link, setLink] = useState({
    type: null,
    url: null,
    slug: null,
    label: null,
  })

  const sortData = (arr) => [arr.sort((a, b) => a.title.localeCompare(b.title))]

  useEffect(() => {
    const fetchPages = async () => {
      await client
        .fetch(
          `*[_type in ['page', 'home', 'legal']]{
          _id,
          title, 
          slug
        }`
        )
        .then(setData)
        .then(sortData(data))
    }

    fetchPages()
  }, [])

  useEffect(() => {
    console.log(value)
  }, [id])

  // const handleClick = React.useCallback(
  //   (e) => {
  //     const inputValue = {
  //       _key: e.target.value.slice(0, 10),
  //       _type: 'reference',
  //       _ref: e.target.value,
  //     }

  //     if (value) {
  //       if (value.some((page) => page._ref === inputValue._ref)) {
  //         onChange(PatchEvent.from(set(value.filter((item) => item._ref != inputValue._ref))))
  //       } else {
  //         onChange(PatchEvent.from(set([...value, inputValue])))
  //       }
  //     } else {
  //       onChange(PatchEvent.from(set([inputValue])))
  //     }
  //   },
  //   [value]
  // )

  const handleChange = (event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
  }

  const handleChangeUrl = (event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set({url: nextValue}) : unset())
  }

  return (
    <>
      <TabList space={2}>
        <Tab
          aria-controls="content-panel"
          icon={AiOutlineLink}
          id="content-tab"
          label="Internal Link"
          onClick={(e) => {
            setId('internal')
          }}
          selected={id === 'internal'}
          space={3}
        />
        <Tab
          aria-controls="content-panel"
          icon={BiLinkExternal}
          id="content-tab"
          label="External Link"
          onClick={() => {
            setId('external')
            // handleClick()
          }}
          selected={id === 'external'}
          space={3}
        />
      </TabList>
      {/* Internal Link */}
      <TabPanel aria-labelledby="content-tab" hidden={id !== 'internal'} id="content-panel">
        <Grid columns={2} gap={3}>
          <Stack space={3} Grid={0.5}>
            <Label space={9}>Select a Page</Label>
            <Select
            // value={value}
            // onChange={(e) => {
            //   set({slug: e.target.value})
            // }}
            >
              <optgroup>
                {data.length > 0 &&
                  data.map((page) => (
                    <option label={page.title} onClick={(e) => set(e.target.value)} key={page._id}>
                      {page.title}
                    </option>
                  ))}
              </optgroup>
            </Select>
          </Stack>
          <Stack space={3}>
            <Label space={9}>Enter a label</Label>
            <TextInput
              placeholder="Enter a Label"
              onChange={(e) => {
                handleChange(e)
              }}
              value={value}
            />
          </Stack>
        </Grid>
      </TabPanel>
      {/* External Link */}
      <TabPanel aria-labelledby="content-tab" hidden={id !== 'external'} id="content-panel">
        <Grid columns={2} gap={3}>
          <Stack space={3}>
            <Label space={9}>Enter a URL</Label>
            <TextInput
              placeholder="https://www..."
              // value={value.label}
              // onChange={(e) => {
              //   handleChangeUrl(e)
              // }}
            />
          </Stack>
          <Stack space={3}>
            <Label space={9}>Enter a label</Label>
            <TextInput placeholder="Label" />
          </Stack>
        </Grid>
      </TabPanel>
    </>
  )
}
export default LinkTypeSelect
