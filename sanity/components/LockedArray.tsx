import {ArrayOfPrimitivesInputProps, ArraySchemaType, ArrayInputFunctionsProps} from 'sanity'
import styles from './lockedArray.module.sass'
import {useCallback, useState} from 'react'

// Remove Add item button
function ArrayFunctions(
  props: ArrayInputFunctionsProps<string | number | boolean, ArraySchemaType>
) {
  return <></>
}

export default function LockedArrayInput(props: ArrayOfPrimitivesInputProps) {
  const [open, setOpen] = useState(false)

  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])

  return (
    // Get rid of side meatball menu with sass module
    <div className={styles.locked}>
      <div className="locked">
        {props.renderDefault({...props, arrayFunctions: ArrayFunctions})}
      </div>
    </div>
  )

  // return (
  //   <Card padding={1} shadown={1}>
  //     <Grid gap={3} className="locked-array">
  //       stuff
  //       {props.members &&
  //         props.members.map((member, i) => {
  //           const icon = member.item.schemaType.icon
  //           const btnText = <Text>{member.item.schemaType.title}</Text>
  //           return (
  //             <>
  //               <Button
  //                 justify="flex-start"
  //                 text="member.item.schemaType.title"
  //                 mode="ghost"
  //                 text={btnText}
  //                 onClick={() => setOpen(true)}
  //                 icon={icon}
  //               ></Button>
  //             </>
  //           )
  //         })}
  //     </Grid>
  //   </Card>
  // )
}
