import React, { Component } from 'react';
import {
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  TextInput,
  TextInputIcon,
  Tree,
  TreeParent,
  TreeChild,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {

  state = {
    multiSelection: ['Option 1'],
  }

  handleMultiSelection(value) {
    this.setState(({ multiSelection }) => ({
      multiSelection: multiSelection.indexOf(value) >= 0
        ? multiSelection.filter((v) => v !== value)
        : [...multiSelection, value],
    }));
  }

  render() {
    const { multiSelection } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase>
          {/* <Tree>
            <TreeParent>
              Lorem ipsum
            </TreeParent>
            <TreeChild>
              dolor sit amet, consectetur adipiscing elit. Donec
              sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
            </TreeChild>
          </Tree> */}


          <Dropdown flip="mirror" >
            <DropdownTarget>
              <TextInput
                  isTarget
                  onChange={ () => {} }
                  readOnly
                  value={ multiSelection.join(', ') }>
                <TextInputIcon name="chevron-down" />
              </TextInput>
            </DropdownTarget>

            <DropdownSource>
              <DropdownContext>
                <DropdownMenu>
                  <Tree>
                    <TreeParent>
                      <DropdownMenuItem
                          multiSelect
                          onClick={ () => this.handleMultiSelection('Option 1') }
                          selected={ multiSelection.indexOf('Option 1') >= 0 }>
                        Option 1
                      </DropdownMenuItem>
                    </TreeParent>

                    <TreeChild>
                      <DropdownMenu>
                        <DropdownMenuItem
                            multiSelect
                            onClick={ () => this.handleMultiSelection('Option 1.1') }
                            selected={ multiSelection.indexOf('Option 1.1') >= 0 }>
                          Option 1.1
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </TreeChild>

                    <TreeParent>
                      <DropdownMenuItem
                          multiSelect
                          onClick={ () => this.handleMultiSelection('Option 2') }
                          selected={ multiSelection.indexOf('Option 2') >= 0 }>
                        Option 2
                      </DropdownMenuItem>
                    </TreeParent>

                    <TreeChild>
                      <DropdownMenu>
                        <DropdownMenuItem
                            multiSelect
                            onClick={ () => this.handleMultiSelection('Option 2.1') }
                            selected={ multiSelection.indexOf('Option 2.1') >= 0 }>
                          Option 2.1
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </TreeChild>
                  </Tree>
                </DropdownMenu>
              </DropdownContext>
            </DropdownSource>
          </Dropdown>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tree/Tree'),
        ] } />
      </DocumentationContent>
    );
  }
}
